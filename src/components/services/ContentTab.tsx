import { motion, AnimatePresence } from "framer-motion";
import { useState, useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

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

// Map static card clients to real images
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
};

/* ── Carousel metadata ── */
const carousels: Record<string, { slides: number; client: string }> = {
  CS1:  { slides: 6, client: "Imobiliário" },
  CS2:  { slides: 6, client: "Dia Pet" },
  CS4:  { slides: 6, client: "Formiguinhas POA" },
  CS5:  { slides: 6, client: "POLO Instaladora" },
  CS6:  { slides: 5, client: "SCH Advogados" },
  CS7:  { slides: 7, client: "TW Aviation English" },
  CS8:  { slides: 7, client: "Dia Pet" },
  CS11: { slides: 7, client: "SCH Advogados" },
  CS12: { slides: 5, client: "Voe Winglets" },
  CS13: { slides: 7, client: "Dasle Coberturas" },
};

type Size = "featured" | "tall" | "wide" | "card";

interface GridItem {
  type: "static" | "carousel";
  carouselId?: string;
  client: string;
  size: Size;
}

const sizeToPlaceholder: Record<Size, string> = {
  card: "600x600",
  tall: "600x1200",
  wide: "1200x600",
  featured: "1200x1200",
};

const sizeToCols: Record<Size, string> = {
  featured: "col-span-1 row-span-1 sm:col-span-2 sm:row-span-2",
  tall: "col-span-1 row-span-1 sm:row-span-2",
  wide: "col-span-1 sm:col-span-2",
  card: "col-span-1",
};

const sizeToAspect: Record<Size, string> = {
  featured: "aspect-square",
  tall: "aspect-[1/2] sm:aspect-[1/2]",
  wide: "aspect-square sm:aspect-[2/1]",
  card: "aspect-square",
};

/* ── Grid items ── */
const gridItems: GridItem[] = [
  // Row 1
  { type: "carousel", carouselId: "CS5",  client: "POLO Instaladora",      size: "featured" },
  { type: "carousel", carouselId: "CS11", client: "SCH Advogados",         size: "tall" },
  { type: "static",                        client: "TW Aviation English",   size: "card" },
  { type: "static",                        client: "Fono Michelle Borges",  size: "card" },
  // Row 2
  { type: "static",                        client: "Dia Pet",               size: "card" },
  { type: "carousel", carouselId: "CS1",  client: "Imobiliário",           size: "wide" },
  { type: "static",                        client: "POLO Instaladora",      size: "card" },
  { type: "static",                        client: "Formiguinhas POA",      size: "card" },
  { type: "static",                        client: "TKA Advogados",         size: "card" },
  // Row 3
  { type: "carousel", carouselId: "CS7",  client: "TW Aviation English",   size: "featured" },
  { type: "carousel", carouselId: "CS8",  client: "Dia Pet",               size: "tall" },
  { type: "static",                        client: "Voe Winglets",          size: "card" },
  { type: "static",                        client: "POLO · Dia da Mulher",    size: "card" },
  { type: "static",                        client: "Dia Pet · 3 cuidados",    size: "card" },
  // Row 4
  { type: "carousel", carouselId: "CS13", client: "Dasle Coberturas",      size: "wide" },
  { type: "carousel", carouselId: "CS4",  client: "Formiguinhas POA",      size: "card" },
  { type: "carousel", carouselId: "CS6",  client: "SCH Advogados",         size: "card" },
  { type: "carousel", carouselId: "CS12", client: "Voe Winglets",          size: "wide" },
  { type: "carousel", carouselId: "CS2",  client: "Dia Pet",               size: "card" },
  { type: "static",                        client: "Fono Michelle · IA e CAA",  size: "card" },
  { type: "static",                        client: "Formiguinhas · Bolos",    size: "card" },
];

function placeholderUrl(client: string, size: Size) {
  const dim = sizeToPlaceholder[size];
  return `https://placehold.co/${dim}/1a1a2e/ffffff?text=${encodeURIComponent(client)}`;
}

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
};

function carouselSlides(id: string, client: string, size: Size) {
  if (realSlides[id]) return realSlides[id];
  const count = carousels[id]?.slides ?? 1;
  const dim = sizeToPlaceholder[size];
  return Array.from({ length: count }, (_, i) =>
    // TODO: substituir pela imagem real
    `https://placehold.co/${dim}/1a1a2e/ffffff?text=${encodeURIComponent(`${client} ${i + 1}`)}`
  );
}

/* ── Lightbox ── */
function Lightbox({
  images,
  startIndex,
  onClose,
}: {
  images: string[];
  startIndex: number;
  onClose: () => void;
}) {
  const [index, setIndex] = useState(startIndex);

  const prev = useCallback(() => setIndex((i) => (i > 0 ? i - 1 : images.length - 1)), [images.length]);
  const next = useCallback(() => setIndex((i) => (i < images.length - 1 ? i + 1 : 0)), [images.length]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, prev, next]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ backgroundColor: "rgba(0,0,0,0.92)" }}
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); prev(); }}
        className="absolute left-4 md:left-8 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <button
        onClick={(e) => { e.stopPropagation(); next(); }}
        className="absolute right-4 md:right-8 text-white/60 hover:text-white transition-colors z-10"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <motion.img
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.25 }}
        src={images[index]}
        alt={`Slide ${index + 1}`}
        className="max-h-[85vh] max-w-[90vw] object-contain rounded-lg"
        onClick={(e) => e.stopPropagation()}
      />

      <div className="absolute bottom-6 text-white/50 text-sm font-body">
        {index + 1} / {images.length}
      </div>
    </motion.div>
  );
}

/* ── Main grid ── */
const ContentTab = () => {
  const [lightbox, setLightbox] = useState<{ images: string[]; index: number } | null>(null);

  return (
    <>
      <div style={{ columns: 3, columnGap: 8 }}>
        {gridItems.map((item, i) => {
          const isCarousel = item.type === "carousel" && item.carouselId;
          const slides = isCarousel
            ? carouselSlides(item.carouselId!, item.client, item.size)
            : [];
          const coverImg = isCarousel
            ? slides[0]
            : (staticImages[item.client] || placeholderUrl(item.client, item.size));

          return (
            <motion.div
              key={`${item.client}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className="relative rounded-xl cursor-pointer group"
              style={{ breakInside: "avoid", marginBottom: 8 }}
              onClick={() => {
                if (isCarousel) {
                  setLightbox({ images: slides, index: 0 });
                }
              }}
            >
              <img
                src={coverImg}
                alt={item.client}
                className="w-full rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                style={{ height: "auto" }}
                loading="lazy"
              />

              {isCarousel && (
                <span
                  className="absolute top-3 right-3 px-2.5 py-1 rounded-full text-xs font-body font-medium text-primary-foreground"
                  style={{ backgroundColor: "hsl(265 50% 63%)" }}
                >
                  ● {carousels[item.carouselId!]?.slides}
                </span>
              )}
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {lightbox && (
          <Lightbox
            images={lightbox.images}
            startIndex={lightbox.index}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default ContentTab;
