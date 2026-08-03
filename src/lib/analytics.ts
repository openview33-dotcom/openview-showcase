/**
 * Camada de tracking (dataLayer / Google Tag Manager).
 * Captura UTMs, tempo na pagina, scroll, secoes vistas e cliques.
 */

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "gclid",
  "fbclid",
  "ttclid",
  "msclkid",
] as const;

const STORAGE_KEY = "ov_attribution";

type Attribution = Record<string, string>;

function readStoredAttribution(): Attribution {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

/** Le as UTMs da URL, persiste na sessao e retorna a atribuicao vigente. */
export function captureAttribution(): Attribution {
  if (typeof window === "undefined") return {};

  const params = new URLSearchParams(window.location.search);
  const fromUrl: Attribution = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) fromUrl[key] = value;
  });

  const stored = readStoredAttribution();
  const attribution = Object.keys(fromUrl).length > 0 ? fromUrl : stored;

  if (Object.keys(fromUrl).length > 0) {
    try {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(fromUrl));
    } catch {
      /* sessionStorage indisponivel */
    }
  }

  if (!attribution.landing_page) {
    attribution.landing_page = window.location.pathname;
  }
  if (!attribution.referrer && document.referrer) {
    attribution.referrer = document.referrer;
  }

  return attribution;
}

let attributionCache: Attribution | null = null;
let startedAt = Date.now();
let maxScroll = 0;

function attribution(): Attribution {
  if (!attributionCache) attributionCache = captureAttribution();
  return attributionCache;
}

/** Segundos desde o carregamento da pagina. */
export function timeOnPage(): number {
  return Math.round((Date.now() - startedAt) / 1000);
}

/** Envia um evento para o dataLayer, sempre com UTMs e tempo na pagina. */
export function track(event: string, payload: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    ...attribution(),
    time_on_page: timeOnPage(),
    max_scroll_depth: maxScroll,
    ...payload,
  });
}

/** Clique em CTA generico. */
export function trackCta(label: string, location: string, extra: Record<string, unknown> = {}) {
  track("cta_click", { cta_label: label, cta_location: location, ...extra });
}

/** Clique que leva ao WhatsApp (evento de conversao). */
export function trackWhatsapp(location: string, extra: Record<string, unknown> = {}) {
  track("whatsapp_click", {
    cta_label: "WhatsApp",
    cta_location: location,
    conversion: true,
    ...extra,
  });
}

/** Troca de aba em qualquer bloco de portfolio/servicos. */
export function trackTab(section: string, tab: string) {
  track("tab_change", { tab_section: section, tab_name: tab });
}

/** Abertura de lightbox / item de portfolio. */
export function trackPortfolioOpen(section: string, itemId: string, extra: Record<string, unknown> = {}) {
  track("portfolio_open", { portfolio_section: section, item_id: itemId, ...extra });
}

/** Play de video. */
export function trackVideoPlay(section: string, videoId: string, extra: Record<string, unknown> = {}) {
  track("video_play", { video_section: section, video_id: videoId, ...extra });
}

/** Navegacao dentro de um carrossel. */
export function trackCarouselNav(itemId: string, slide: number, direction: "next" | "prev") {
  track("carousel_navigate", { item_id: itemId, slide_index: slide, direction });
}

/**
 * Inicializa engajamento: scroll depth, marcos de tempo, secoes vistas e saida.
 * Retorna funcao de cleanup.
 */
export function initEngagementTracking(): () => void {
  if (typeof window === "undefined") return () => {};

  startedAt = Date.now();
  maxScroll = 0;
  attributionCache = captureAttribution();

  track("page_view_spa", { page_path: window.location.pathname });

  const scrollMarks = [25, 50, 75, 100];
  const firedScroll = new Set<number>();

  const onScroll = () => {
    const doc = document.documentElement;
    const scrollable = doc.scrollHeight - window.innerHeight;
    if (scrollable <= 0) return;
    const percent = Math.min(100, Math.round((window.scrollY / scrollable) * 100));
    if (percent > maxScroll) maxScroll = percent;
    scrollMarks.forEach((mark) => {
      if (percent >= mark && !firedScroll.has(mark)) {
        firedScroll.add(mark);
        track("scroll_depth", { scroll_percent: mark });
      }
    });
  };

  const timeMarks = [15, 30, 60, 120, 300];
  const timers = timeMarks.map((seconds) =>
    window.setTimeout(() => track("time_on_page_mark", { seconds }), seconds * 1000),
  );

  // Secoes vistas (>=50% visiveis)
  const seenSections = new Set<string>();
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const id = (entry.target as HTMLElement).id;
        if (entry.isIntersecting && id && !seenSections.has(id)) {
          seenSections.add(id);
          track("section_view", { section_id: id });
        }
      });
    },
    { threshold: 0.5 },
  );
  document.querySelectorAll("section[id]").forEach((el) => observer.observe(el));

  const onLeave = () => {
    track("page_exit", {
      total_time_seconds: timeOnPage(),
      sections_viewed: Array.from(seenSections).join(","),
    });
  };
  const onVisibility = () => {
    if (document.visibilityState === "hidden") onLeave();
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  document.addEventListener("visibilitychange", onVisibility);
  window.addEventListener("pagehide", onLeave);

  onScroll();

  return () => {
    window.removeEventListener("scroll", onScroll);
    document.removeEventListener("visibilitychange", onVisibility);
    window.removeEventListener("pagehide", onLeave);
    observer.disconnect();
    timers.forEach((t) => window.clearTimeout(t));
  };
}
