import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { ChevronLeft, ChevronRight, X, Loader2 } from "lucide-react";

// CS01 - Imobiliário (6 slides, PNG)
import CS01_01 from "@/assets/CS01.01.png";
import CS01_02 from "@/assets/CS01.02.png";
import CS01_03 from "@/assets/CS01.03.png";
import CS01_04 from "@/assets/CS01.04.png";
import CS01_05 from "@/assets/CS01.05.png";
import CS01_06 from "@/assets/CS01.06.png";

// CS02 - Dia Pet (6 slides)
import CS02_01 from "@/assets/CS02.01.jpg";
import CS02_02 from "@/assets/CS02.02.jpg";
import CS02_03 from "@/assets/CS02.03.jpg";
import CS02_04 from "@/assets/CS02.04.jpg";
import CS02_05 from "@/assets/CS02.05.jpg";
import CS02_06 from "@/assets/CS02.06.jpg";

// CS04 - Formiguinhas POA (6 slides)
import CS04_01 from "@/assets/CS04.01.jpg";
import CS04_02 from "@/assets/CS04.02.jpg";
import CS04_03 from "@/assets/CS04.03.jpg";
import CS04_04 from "@/assets/CS04.04.jpg";
import CS04_05 from "@/assets/CS04.05.jpg";
import CS04_06 from "@/assets/CS04.06.jpg";

// CS05 - POLO Instaladora (6 slides)
import CS05_01 from "@/assets/CS05.01.jpg";
import CS05_02 from "@/assets/CS05.02.jpg";
import CS05_03 from "@/assets/CS05.03.jpg";
import CS05_04 from "@/assets/CS05.04.jpg";
import CS05_05 from "@/assets/CS05.05.jpg";
import CS05_06 from "@/assets/CS05.06.jpg";

// CS06 - SCH Advogados (5 slides)
import CS06_01 from "@/assets/CS06.01.jpg";
import CS06_02 from "@/assets/CS06.02.jpg";
import CS06_03 from "@/assets/CS06.03.jpg";
import CS06_04 from "@/assets/CS06.04.jpg";
import CS06_05 from "@/assets/CS06.05.jpg";

// CS07 - TW Aviation English (7 slides)
import CS07_01 from "@/assets/CS07.01.jpg";
import CS07_02 from "@/assets/CS07.02.jpg";
import CS07_03 from "@/assets/CS07.03.jpg";
import CS07_04 from "@/assets/CS07.04.jpg";
import CS07_05 from "@/assets/CS07.05.jpg";
import CS07_06 from "@/assets/CS07.06.jpg";
import CS07_07 from "@/assets/CS07.07.jpg";

// CS08 - Dia Pet (7 slides)
import CS08_01 from "@/assets/CS08.01.jpg";
import CS08_02 from "@/assets/CS08.02.jpg";
import CS08_03 from "@/assets/CS08.03.jpg";
import CS08_04 from "@/assets/CS08.04.jpg";
import CS08_05 from "@/assets/CS08.05.jpg";
import CS08_06 from "@/assets/CS08.06.jpg";
import CS08_07 from "@/assets/CS08.07.jpg";

// CS11 - SCH Advogados (7 slides)
import CS11_01 from "@/assets/CS11.01.jpg";
import CS11_02 from "@/assets/CS11.02.jpg";
import CS11_03 from "@/assets/CS11.03.jpg";
import CS11_04 from "@/assets/CS11.04.jpg";
import CS11_05 from "@/assets/CS11.05.jpg";
import CS11_06 from "@/assets/CS11.06.jpg";
import CS11_07 from "@/assets/CS11.07.jpg";

// CS12 - Voe Winglets (5 slides)
import CS12_01 from "@/assets/CS12.01.jpg";
import CS12_02 from "@/assets/CS12.02.jpg";
import CS12_03 from "@/assets/CS12.03.jpg";
import CS12_04 from "@/assets/CS12.04.jpg";
import CS12_05 from "@/assets/CS12.05.jpg";

// CS13 - Dasle Coberturas (7 slides)
import CS13_01 from "@/assets/CS13.01.jpg";
import CS13_02 from "@/assets/CS13.02.jpg";
import CS13_03 from "@/assets/CS13.03.jpg";
import CS13_04 from "@/assets/CS13.04.jpg";
import CS13_05 from "@/assets/CS13.05.jpg";
import CS13_06 from "@/assets/CS13.06.jpg";
import CS13_07 from "@/assets/CS13.07.jpg";

// CS14 - Fono Michelle Borges (10 slides)
import CS14_01 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_01.png";
import CS14_02 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_02.png";
import CS14_03 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_03.png";
import CS14_04 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_04.png";
import CS14_05 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_05.png";
import CS14_06 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_06.png";
import CS14_07 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_07.png";
import CS14_08 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_08.png";
import CS14_09 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_09.png";
import CS14_10 from "@/assets/POST 1-ok/Criativo-1---7-Sinais-(Carrossel)_10.png";

// CS15 - Fono Michelle Borges (6 slides)
import CS15_01 from "@/assets/2 Carrossel/Criativo-5---Usei-nos-Atendimentos-(Carrossel)_01.png";
import CS15_02 from "@/assets/2 Carrossel/Criativo-5---Usei-nos-Atendimentos-(Carrossel)_02.png";
import CS15_03 from "@/assets/2 Carrossel/Criativo-5---Usei-nos-Atendimentos-(Carrossel)_03.png";
import CS15_04 from "@/assets/2 Carrossel/Criativo-5---Usei-nos-Atendimentos-(Carrossel)_04.png";
import CS15_05 from "@/assets/2 Carrossel/Criativo-5---Usei-nos-Atendimentos-(Carrossel)_05.png";
import CS15_06 from "@/assets/2 Carrossel/Criativo-5---Usei-nos-Atendimentos-(Carrossel)_06.png";

// Static card images
import imgTWAviation from "@/assets/twaviationenglish_card.png";
import imgTWAviation2 from "@/assets/twaviationenglish_post_25_03_2026_17_00_483860824194150668262.jpg";
import imgFonoMichelle from "@/assets/fonomichelleborges_post_04_12_2025_17_00_343780374306803492589.jpg";
import imgDiaPet from "@/assets/diadepet_petshop_post_09_12_2025_12_00_423783847009691046453.jpg";
import imgPoloInstCard from "@/assets/polo.instaladora_post_02_10_2025_14_00_023734622564632200586.jpg";
import imgFormiguinhas from "@/assets/formiguinhaspoa_post_06_02_2026_13_53_083826682167916785955.jpg";
import imgTKA from "@/assets/tka_advogados_post_08_10_2025_12_00_193738912333550118392.jpg";
import imgVoeWinglets from "@/assets/voewinglets_post_28_10_2025_17_00_033753557299403170483.jpg";
import imgPoloDiaMulher from "@/assets/Criativo-04---Dia-da-Mulher-(Feed).png";
import imgDiaPet3Cuidados from "@/assets/diadepet_petshop_post_20_03_2026_10_00_373856992144410815685.jpg";
import imgFonoIA from "@/assets/fonomichelleborges_post_09_03_2026_16_00_363849197535789977397.jpg";
import imgFormiguinhasBolos from "@/assets/formiguinhaspoa_post_23_01_2026_13_17_433816522946663461519.jpg";

// New static images - Fono Michelle Borges
import imgFonoAntecipacao7 from "@/assets/1._Criativo_Antecipacao_l_Faltam_7_Dias_(Feed).png";
import imgFonoAntecipacao5 from "@/assets/3._Criativo_Antecipacao_l_Faltam_5_Dias_(Feed).png";
import imgFonoAntecipacao4 from "@/assets/4._Criativo_Antecipacao_l_Faltam_4_Dias_(Feed).png";
import imgFonoComunicacao from "@/assets/Criativo-2---Comunicacao-Autismo-(Feed).png";
import imgFonoPsicoterapia from "@/assets/Criativo-6---Psicoterapia-(Feed).png";
import imgFonoAgenda from "@/assets/Criativo-8---Agenda-Aberta-(Feed).png";

const CS1_SLIDES = [CS01_01, CS01_02, CS01_03, CS01_04, CS01_05, CS01_06];
const CS2_SLIDES = [CS02_01, CS02_02, CS02_03, CS02_04, CS02_05, CS02_06];
const CS4_SLIDES = [CS04_01, CS04_02, CS04_03, CS04_04, CS04_05, CS04_06];
const CS5_SLIDES = [CS05_01, CS05_02, CS05_03, CS05_04, CS05_05, CS05_06];
const CS6_SLIDES = [CS06_01, CS06_02, CS06_03, CS06_04, CS06_05];
const CS7_SLIDES = [CS07_01, CS07_02, CS07_03, CS07_04, CS07_05, CS07_06, CS07_07];
const CS8_SLIDES = [CS08_01, CS08_02, CS08_03, CS08_04, CS08_05, CS08_06, CS08_07];
const CS11_SLIDES = [CS11_01, CS11_02, CS11_03, CS11_04, CS11_05, CS11_06, CS11_07];
const CS12_SLIDES = [CS12_01, CS12_02, CS12_03, CS12_04, CS12_05];
const CS13_SLIDES = [CS13_01, CS13_02, CS13_03, CS13_04, CS13_05, CS13_06, CS13_07];
const CS14_SLIDES = [CS14_01, CS14_02, CS14_03, CS14_04, CS14_05, CS14_06, CS14_07, CS14_08, CS14_09, CS14_10];
const CS15_SLIDES = [CS15_01, CS15_02, CS15_03, CS15_04, CS15_05, CS15_06];

const staticImages: Record<string, string> = {
  "TW Aviation English": imgTWAviation,
  "Fono Michelle Borges": imgFonoMichelle,
  "Dia Pet": imgDiaPet,
  "POLO Instaladora": imgPoloInstCard,
  "Formiguinhas POA": imgFormiguinhas,
  "TKA Advogados": imgTKA,
  "Voe Winglets": imgVoeWinglets,
  "POLO · Dia da Mulher": imgPoloDiaMulher,
  "Dia Pet · 3 cuidados": imgDiaPet3Cuidados,
  "Fono Michelle · IA e CAA": imgFonoIA,
  "Formiguinhas · Bolos": imgFormiguinhasBolos,
  "Fono · Antecipação 7 dias": imgFonoAntecipacao7,
  "Fono · Antecipação 5 dias": imgFonoAntecipacao5,
  "Fono · Antecipação 4 dias": imgFonoAntecipacao4,
  "Fono · Comunicação Autismo": imgFonoComunicacao,
  "Fono · Psicoterapia": imgFonoPsicoterapia,
  "Fono · Agenda Aberta": imgFonoAgenda,
};

const realSlides: Record<string, string[]> = {
  CS1: CS1_SLIDES,
  CS2: CS2_SLIDES,
  CS4: CS4_SLIDES,
  CS5: CS5_SLIDES,
  CS6: CS6_SLIDES,
  CS7: CS7_SLIDES,
  CS8: CS8_SLIDES,
  CS11: CS11_SLIDES,
  CS12: CS12_SLIDES,
  CS13: CS13_SLIDES,
  CS14: CS14_SLIDES,
  CS15: CS15_SLIDES,
};

const carousels: Record<string, { slides: number; client: string }> = {
  CS1: { slides: 6, client: "Imobiliário" },
  CS2: { slides: 6, client: "Dia Pet" },
  CS4: { slides: 6, client: "Formiguinhas POA" },
  CS5: { slides: 6, client: "POLO Instaladora" },
  CS6: { slides: 5, client: "SCH Advogados" },
  CS7: { slides: 7, client: "TW Aviation English" },
  CS8: { slides: 7, client: "Dia Pet" },
  CS11: { slides: 7, client: "SCH Advogados" },
  CS12: { slides: 5, client: "Voe Winglets" },
  CS13: { slides: 7, client: "Dasle Coberturas" },
  CS14: { slides: 10, client: "Fono Michelle Borges" },
  CS15: { slides: 6, client: "Fono Michelle Borges" },
};

interface GridItem {
  type: "static" | "carousel";
  carouselId?: string;
  client: string;
}

const gridItems: GridItem[] = [
  { type: "carousel", carouselId: "CS5", client: "POLO Instaladora" },
  { type: "carousel", carouselId: "CS11", client: "SCH Advogados" },
  { type: "static", client: "TW Aviation English" },
  { type: "static", client: "Fono · Comunicação Autismo" },
  { type: "static", client: "Dia Pet" },
  { type: "carousel", carouselId: "CS14", client: "Fono Michelle Borges" },
  { type: "static", client: "POLO Instaladora" },
  { type: "static", client: "Formiguinhas POA" },
  { type: "carousel", carouselId: "CS1", client: "Imobiliário" },
  { type: "static", client: "TKA Advogados" },
  { type: "carousel", carouselId: "CS7", client: "TW Aviation English" },
  { type: "static", client: "Fono · Antecipação 7 dias" },
  { type: "carousel", carouselId: "CS8", client: "Dia Pet" },
  { type: "static", client: "Voe Winglets" },
  { type: "static", client: "POLO · Dia da Mulher" },
  { type: "carousel", carouselId: "CS15", client: "Fono Michelle Borges" },
  { type: "static", client: "Dia Pet · 3 cuidados" },
  { type: "carousel", carouselId: "CS13", client: "Dasle Coberturas" },
  { type: "static", client: "Fono · Psicoterapia" },
  { type: "carousel", carouselId: "CS4", client: "Formiguinhas POA" },
  { type: "static", client: "Fono · Antecipação 5 dias" },
  { type: "carousel", carouselId: "CS6", client: "SCH Advogados" },
  { type: "static", client: "Fono · Agenda Aberta" },
  { type: "carousel", carouselId: "CS12", client: "Voe Winglets" },
  { type: "static", client: "Fono Michelle · IA e CAA" },
  { type: "carousel", carouselId: "CS2", client: "Dia Pet" },
  { type: "static", client: "Fono · Antecipação 4 dias" },
  { type: "static", client: "Formiguinhas · Bolos" },
  { type: "static", client: "Fono Michelle Borges" },
];

/** Get all images for a grid item */
function getItemImages(item: GridItem): string[] {
  if (item.type === "carousel" && item.carouselId && realSlides[item.carouselId]) {
    return realSlides[item.carouselId];
  }
  const img = staticImages[item.client];
  return img ? [img] : [`https://placehold.co/600x600/1a1a2e/ffffff?text=${encodeURIComponent(item.client)}`];
}

/* ── Preload helper ── */
const preloadCache = new Set<string>();
function preloadImages(urls: string[]) {
  urls.forEach((url) => {
    if (preloadCache.has(url)) return;
    preloadCache.add(url);
    const img = new Image();
    img.src = url;
  });
}

function preloadGridNeighbors(gridIdx: number, radius: number) {
  for (let offset = -radius; offset <= radius; offset++) {
    if (offset === 0) continue;
    const idx = (gridIdx + offset + gridItems.length) % gridItems.length;
    preloadImages(getItemImages(gridItems[idx]));
  }
}

/* ── Lightbox ── */
function Lightbox({
  gridIndex,
  slideIndex: initialSlide,
  onClose,
}: {
  gridIndex: number;
  slideIndex: number;
  onClose: () => void;
}) {
  const [currentGridIndex, setCurrentGridIndex] = useState(gridIndex);
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [isNavigating, setIsNavigating] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  const spinnerTimer = useRef<ReturnType<typeof setTimeout>>();

  // Tape state
  const [tape, setTape] = useState<{ nextSrc: string; dir: 1 | -1; phase: "ready" | "sliding"; targetGrid: number; targetSlide: number } | null>(null);
  const tapeRef = useRef<HTMLDivElement>(null);
  const mainImgRef = useRef<HTMLImageElement>(null);
  const [imgDims, setImgDims] = useState<{ w: number; h: number }>({ w: window.innerWidth * 0.9, h: window.innerHeight * 0.9 });

  const currentItem = gridItems[currentGridIndex];
  const currentImages = getItemImages(currentItem);
  const isCarousel = currentImages.length > 1;
  const currentSrc = currentImages[currentSlide];

  const measureImg = useCallback(() => {
    if (mainImgRef.current && mainImgRef.current.complete) {
      const { clientWidth: w, clientHeight: h } = mainImgRef.current;
      if (w > 0 && h > 0) setImgDims({ w, h });
    }
  }, []);

  useEffect(() => {
    measureImg();
    window.addEventListener("resize", measureImg);
    return () => window.removeEventListener("resize", measureImg);
  }, [measureImg, currentGridIndex, currentSlide]);

  // Preloading
  useEffect(() => {
    preloadImages(getItemImages(gridItems[gridIndex]));
    preloadGridNeighbors(gridIndex, 2);
  }, [gridIndex]);

  useEffect(() => {
    preloadGridNeighbors(currentGridIndex, 2);
    preloadImages(currentImages);
    const nextIdx = (currentGridIndex + 1) % gridItems.length;
    preloadImages([getItemImages(gridItems[nextIdx])[0]]);
  }, [currentGridIndex, currentImages]);

  useEffect(() => () => clearTimeout(spinnerTimer.current), []);

  const resolveNext = useCallback((dir: 1 | -1): { gridIdx: number; slide: number } => {
    if (dir === 1) {
      if (isCarousel && currentSlide < currentImages.length - 1) {
        return { gridIdx: currentGridIndex, slide: currentSlide + 1 };
      }
      return { gridIdx: (currentGridIndex + 1) % gridItems.length, slide: 0 };
    }
    if (isCarousel && currentSlide > 0) {
      return { gridIdx: currentGridIndex, slide: currentSlide - 1 };
    }
    const prevGrid = (currentGridIndex - 1 + gridItems.length) % gridItems.length;
    const prevImages = getItemImages(gridItems[prevGrid]);
    return { gridIdx: prevGrid, slide: prevImages.length - 1 };
  }, [isCarousel, currentSlide, currentImages.length, currentGridIndex]);

  const navigate = useCallback((dir: 1 | -1) => {
    if (tape || isNavigating) return;

    const { gridIdx, slide } = resolveNext(dir);
    const targetImages = getItemImages(gridItems[gridIdx]);
    const targetSrc = targetImages[slide];

    // Preload ahead
    const f1 = (gridIdx + dir + gridItems.length) % gridItems.length;
    const f2 = (gridIdx + dir * 2 + gridItems.length) % gridItems.length;
    preloadImages(getItemImages(gridItems[f1]));
    preloadImages(getItemImages(gridItems[f2]));

    const testImg = new Image();
    testImg.src = targetSrc;

    const startTape = () => {
      clearTimeout(spinnerTimer.current);
      setShowSpinner(false);
      setIsNavigating(false);

      // Phase 1: place images side by side, no transition yet
      setTape({ nextSrc: targetSrc, dir, phase: "ready", targetGrid: gridIdx, targetSlide: slide });
    };

    if (testImg.complete) {
      startTape();
    } else {
      setIsNavigating(true);
      clearTimeout(spinnerTimer.current);
      spinnerTimer.current = setTimeout(() => setShowSpinner(true), 200);
      testImg.onload = startTape;
      testImg.onerror = startTape;
    }
  }, [tape, isNavigating, resolveNext]);

  // When tape phase is "ready", trigger the slide on next frame
  useEffect(() => {
    if (!tape || tape.phase !== "ready") return;
    // Force layout read, then start sliding
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        setTape((t) => t ? { ...t, phase: "sliding" } : null);
      });
    });
  }, [tape]);

 const committed = useRef(false);

const commitTransition = useCallback(() => {
  if (!tape || committed.current) return;
  committed.current = true;
  const { targetGrid, targetSlide } = tape;
  setCurrentGridIndex(targetGrid);
  setCurrentSlide(targetSlide);
  setTape(null);
}, [tape]);

// Timeout fallback for transition end
useEffect(() => {
  if (!tape || tape.phase !== "sliding") return;
  committed.current = false;
  const t = setTimeout(commitTransition, 320);
  return () => clearTimeout(t);
}, [tape, commitTransition]);
  
  const goNext = useCallback(() => navigate(1), [navigate]);
  const goPrev = useCallback(() => navigate(-1), [navigate]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, goNext, goPrev]);

  // Tape layout:
  // Going right: [current][next], starts at translateX(0), slides to translateX(-50%)
  // Going left: [next][current], starts at translateX(-50%), slides to translateX(0)
  const isSliding = tape?.phase === "sliding";
  let tapeTranslate = "0%";
  if (tape) {
    if (tape.dir === 1) {
      tapeTranslate = isSliding ? "-50%" : "0%";
    } else {
      tapeTranslate = isSliding ? "0%" : "-50%";
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.9)" }}
      onClick={onClose}
    >
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10">
        <X className="w-8 h-8" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); goPrev(); }} className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10">
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button onClick={(e) => { e.stopPropagation(); goNext(); }} className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10">
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Outer viewport — clips overflow */}
      <div
        className="relative overflow-hidden rounded-lg"
        style={{
          width: imgDims ? imgDims.w : "auto",
          height: imgDims ? imgDims.h : "auto",
          maxWidth: "90vw",
          maxHeight: "90vh",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Inner tape — 200% wide with two images */}
        <div
          ref={tapeRef}
          onTransitionEnd={commitTransition}
          style={{
            display: "flex",
            width: tape ? "200%" : "100%",
            height: "100%",
            transform: `translateX(${tapeTranslate})`,
            transition: isSliding ? "transform 0.3s ease-in-out" : "none",
          }}
        >
          {tape && tape.dir === -1 && (
            <img src={tape.nextSrc} alt="" className="block object-contain" style={{ width: "50%", height: "100%", flexShrink: 0 }} />
          )}

          <img
            ref={mainImgRef}
            src={currentSrc}
            alt={`${currentItem.client} – ${currentSlide + 1}`}
            className="block object-contain"
            style={{ width: tape ? "50%" : "100%", height: "100%", flexShrink: 0 }}
            onLoad={measureImg}
          />

          {tape && tape.dir === 1 && (
            <img src={tape.nextSrc} alt="" className="block object-contain" style={{ width: "50%", height: "100%", flexShrink: 0 }} />
          )}
        </div>
      </div>


      {showSpinner && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
          <Loader2 className="w-8 h-8 animate-spin" style={{ color: "hsl(265 50% 63%)" }} />
        </div>
      )}

      <div className="absolute bottom-6 text-white/50 text-sm font-body flex gap-4">
        <span>{currentItem.client}</span>
        {isCarousel && <span>{currentSlide + 1} / {currentImages.length}</span>}
      </div>
    </motion.div>
  );
}

/* ── Main grid ── */
const ContentTab = () => {
  const [lightbox, setLightbox] = useState<{ gridIndex: number; slideIndex: number } | null>(null);

  return (
    <>
      <div style={{ columns: 3, columnGap: 8 }}>
        {gridItems.map((item, i) => {
          const images = getItemImages(item);
          const coverImg = images[0];
          const isCarousel = images.length > 1;

          return (
            <motion.div
              key={`${item.client}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="relative rounded-xl cursor-pointer group"
              style={{ breakInside: "avoid", marginBottom: 8 }}
              onClick={() => setLightbox({ gridIndex: i, slideIndex: 0 })}
            >
              <img
                src={coverImg}
                alt={item.client}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ height: "auto" }}
                loading="lazy"
              />

              {isCarousel && (
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-body font-medium text-primary-foreground bg-primary">
                  ● {images.length}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            gridIndex={lightbox.gridIndex}
            slideIndex={lightbox.slideIndex}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentTab;
