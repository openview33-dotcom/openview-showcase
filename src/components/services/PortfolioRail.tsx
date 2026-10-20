import { useEffect, useMemo, useRef, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface PortfolioRailProps {
  label: string;
  children: ReactNode;
  paused?: boolean;
  className?: string;
}

export const RAIL_SPEED = 1.6;

export default function PortfolioRail({ label, children, paused = false, className }: PortfolioRailProps) {
  const autoScroll = useMemo(() => AutoScroll({ speed: RAIL_SPEED, startDelay: 900, playOnInit: false, stopOnInteraction: false }), []);
  const [viewportRef, api] = useEmblaCarousel({ loop: true, dragFree: true, align: "start", skipSnaps: true }, [autoScroll]);
  const root = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [manualPause, setManualPause] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => { setReducedMotion(media.matches); setManualPause(media.matches); };
    update();
    media.addEventListener("change", update);
    const observer = new IntersectionObserver(([entry]) => setVisible(entry.isIntersecting), { threshold: 0.1 });
    if (root.current) observer.observe(root.current);
    return () => { media.removeEventListener("change", update); observer.disconnect(); };
  }, []);

  useEffect(() => {
    if (!api) return;
    if (paused || manualPause || hovered || focused || !visible || reducedMotion) autoScroll.stop();
    else autoScroll.play();
  }, [api, autoScroll, paused, manualPause, hovered, focused, visible, reducedMotion]);

  return (
    <div ref={root} role="region" aria-label={label} className={cn("portfolio-rail", className)}>
      <div className="flex items-center justify-end gap-2 mb-5">
        <Button variant="ghost" size="icon" className="rail-control" aria-label={manualPause ? `Retomar ${label}` : `Pausar ${label}`} title={manualPause ? "Retomar movimento" : "Pausar movimento"} onClick={() => setManualPause(value => !value)}>
          {manualPause ? <Play /> : <Pause />}
        </Button>
        <Button variant="ghost" size="icon" className="rail-control" aria-label={`Anterior em ${label}`} title="Anterior" onClick={() => api?.scrollPrev()}><ChevronLeft /></Button>
        <Button variant="ghost" size="icon" className="rail-control" aria-label={`Próximo em ${label}`} title="Próximo" onClick={() => api?.scrollNext()}><ChevronRight /></Button>
      </div>
      <div ref={viewportRef} className="overflow-hidden cursor-grab active:cursor-grabbing" onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} onFocusCapture={() => setFocused(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setFocused(false); }}>
        <div className="flex gap-4 touch-pan-y py-2">{children}</div>
      </div>
    </div>
  );
}