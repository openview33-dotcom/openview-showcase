import { useEffect, useRef } from "react";
import { track } from "@/lib/analytics";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<any> | null = null;
function loadYouTubeApi(): Promise<any> {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve(window.YT);
    };
    const s = document.createElement("script");
    s.src = "https://www.youtube.com/iframe_api";
    s.async = true;
    document.head.appendChild(s);
  });
  return apiPromise;
}

const MARKS = [10, 25, 50, 75, 90, 100];

interface Props {
  videoId: string;
  section: string;
  videoName?: string;
  className?: string;
  title: string;
  loop?: boolean;
}

/** Player do YouTube que envia ao dataLayer quanto (%) e quanto tempo de cada video foi assistido. */
const TrackedYouTube = ({ videoId, section, videoName, className, title, loop }: Props) => {
  const hostRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: any = null;
    let interval: number | undefined;
    let destroyed = false;
    const fired = new Set<number>();
    let maxPercent = 0;
    let watched = 0;
    let lastTick = 0;
    let duration = 0;
    const base = { video_section: section, video_id: videoId, video_name: videoName ?? videoId };

    const tick = () => {
      if (!player?.getCurrentTime) return;
      const now = Date.now();
      if (lastTick) watched += (now - lastTick) / 1000;
      lastTick = now;
      duration = player.getDuration?.() || duration;
      if (!duration) return;
      const pct = Math.min(100, Math.round((player.getCurrentTime() / duration) * 100));
      if (pct > maxPercent) maxPercent = pct;
      MARKS.forEach((m) => {
        if (pct >= m && !fired.has(m)) {
          fired.add(m);
          track("video_progress", { ...base, video_percent: m, video_duration: Math.round(duration) });
        }
      });
    };

    loadYouTubeApi().then((YT) => {
      if (destroyed || !hostRef.current) return;
      const el = document.createElement("div");
      hostRef.current.appendChild(el);
      player = new YT.Player(el, {
        videoId,
        width: "100%",
        height: "100%",
        playerVars: { autoplay: 1, rel: 0, modestbranding: 1, playsinline: 1, ...(loop ? { loop: 1, playlist: videoId } : {}) },
        events: {
          onReady: (e: any) => {
            e.target.getIframe().setAttribute("title", title);
            e.target.playVideo();
          },
          onStateChange: (e: any) => {
            const S = YT.PlayerState;
            if (e.data === S.PLAYING) {
              lastTick = Date.now();
              window.clearInterval(interval);
              interval = window.setInterval(tick, 1000);
              track("video_start", base);
            } else {
              tick();
              lastTick = 0;
              window.clearInterval(interval);
              if (e.data === S.PAUSED) track("video_pause", { ...base, video_percent_max: maxPercent });
              if (e.data === S.ENDED) {
                if (!fired.has(100)) { fired.add(100); track("video_progress", { ...base, video_percent: 100 }); }
                track("video_complete", { ...base, video_duration: Math.round(duration) });
              }
            }
          },
        },
      });
    });

    return () => {
      destroyed = true;
      tick();
      window.clearInterval(interval);
      track("video_close", {
        ...base,
        video_percent_max: maxPercent,
        video_watch_seconds: Math.round(watched),
        video_duration: Math.round(duration),
      });
      try { player?.destroy?.(); } catch { /* noop */ }
    };
  }, [videoId, section, videoName, title, loop]);

  return <div ref={hostRef} className={`${className ?? ""} [&>iframe]:w-full [&>iframe]:h-full`} />;
};

export default TrackedYouTube;
