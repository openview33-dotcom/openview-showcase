import { motion } from "framer-motion";

/* ── Helpers ── */
function toEmbedUrl(url: string): string {
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&]+)/);
  if (shortsMatch) return `https://www.youtube.com/embed/${shortsMatch[1]}?rel=0&modestbranding=1&showinfo=0&controls=1`;

  const shortMatch = url.match(/youtu\.be\/([^?&]+)/);
  if (shortMatch) return `https://www.youtube.com/embed/${shortMatch[1]}?rel=0&modestbranding=1&showinfo=0&controls=1`;

  return url;
}

/* ── Data ── */
interface VideoItem {
  id: string;
  url: string;
  label?: string;
}

const horizontalVideos: VideoItem[] = [
  { id: "H3", url: "https://youtu.be/i5LiMQ13qvs" },
  { id: "H4", url: "https://youtu.be/1QNlvPAMINA", label: "Trem de Pouso | Evento" },
  { id: "H5", url: "https://youtu.be/M0nqrtaDK80", label: "Curso | Família Atípica" },
  { id: "H6", url: "https://youtu.be/OQQMcp_48GU" },
  { id: "H7", url: "https://youtu.be/f3y-VLJyl6c" },
  { id: "H8", url: "https://youtu.be/AhNlfGYkcY4" },
];

const verticalVideos: VideoItem[] = [
  // Leva mais recente (topo), alternando clientes por linha e coluna
  { id: "V33", url: "https://youtube.com/shorts/52IUBaUyaLk" },   // Vetlog - Depoimento Giovanni
  { id: "V34", url: "https://youtube.com/shorts/cWxPuE8J4xk" },   // TKA - Servidor x INSS
  { id: "V36", url: "https://youtube.com/shorts/0_Yx1Labf6Q" },   // Michelle Borges - Leitura compartilhada
  { id: "V40", url: "https://youtube.com/shorts/rnct9nUc2ms" },   // Andreas Dreckmann - DMI

  { id: "V42", url: "https://youtube.com/shorts/Te8082mbPCc" },   // Casa Mirim - Tamanho da casa
  { id: "V38", url: "https://youtube.com/shorts/l2ugXE4qad4" },   // Independência - Apto Trend 24
  { id: "V35", url: "https://youtube.com/shorts/0GE4M6L5k3E" },   // TKA - Golpe do falso advogado
  { id: "V39", url: "https://youtube.com/shorts/_K92_y0MMSA" },   // Dia de Pet - Problema nos olhos

  { id: "V37", url: "https://youtube.com/shorts/f6HndI4p3rU" },   // Michelle Borges - Trabalho com CAA
  { id: "V41", url: "https://youtube.com/shorts/WO7vlSwujJQ" },   // Andreas - Crescer x desenvolver
  { id: "V43", url: "https://youtube.com/shorts/Q48FAyKmIuE" },   // Casa Mirim - Essência da casa
  { id: "V29", url: "https://youtube.com/shorts/0yON4aeeBLc" },   // Ímãs de geladeira

  { id: "V28", url: "https://youtube.com/shorts/d1Kqn6Rii7I" },   // Jurídico - Inventário
  { id: "V26", url: "https://youtube.com/shorts/7aPjmRqon0M" },   // Marca pessoal
  { id: "V25", url: "https://youtube.com/shorts/knMocSKzcDM" },   // Corte podcast



  // A partir da segunda fileira: embaralhado evitando clientes repetidos próximos
  { id: "V30", url: "https://youtube.com/shorts/h00kcW_0JIg" },   // Atendimento
  { id: "V22", url: "https://youtube.com/shorts/WzudKtzzYtI" },   // Itália (compra de imóvel)
  { id: "V11", url: "https://youtube.com/shorts/WyGPvuekkM8" },   // Xerifes 01
  { id: "V18", url: "https://youtube.com/shorts/wLVA8UufPN0" },   // Alívio CB
  { id: "V31", url: "https://youtube.com/shorts/BsxIbjO6uQw" },   // Indicação de livro
  { id: "V14", url: "https://youtube.com/shorts/ZXPDQuXPj60" },   // TKA - Inventário
  { id: "V15", url: "https://youtube.com/shorts/LS-R2XW_23E" },   // D'asle Coberturas
  { id: "V17", url: "https://youtube.com/shorts/GmFpgQ9ND5U" },   // Michelle - Conversia
  { id: "V21", url: "https://youtube.com/shorts/v-tyIVH-fEI" },   // Xerifes
  { id: "V10", url: "https://youtube.com/shorts/ylYhuW5To8Q" },   // Clínica da Linguagem - Marcos
  { id: "V32", url: "https://youtube.com/shorts/MOmUE5qN_3g" },   // Aula Abril
  { id: "V24", url: "https://youtube.com/shorts/96eGa9Wxf08" },   // Inglês para aviação
  { id: "V12", url: "https://youtube.com/shorts/u2NEwoAmtkc" },   // Atitude Positiva
  { id: "V27", url: "https://youtube.com/shorts/FZDM8GOr_a0" },   // Anúncio Inventário
  { id: "V16", url: "https://youtube.com/shorts/VSUj9vSt2g4" },   // Tommasi - Itália
  { id: "V9",  url: "https://youtube.com/shorts/YN3YznLuxpE" },   // Alívio LB
  { id: "V13", url: "https://youtube.com/shorts/Ek3bDiCEvEk" },   // EspetoFlex
  { id: "V23", url: "https://youtube.com/shorts/vsvzvTmYTXs" },   // D'asle
  { id: "V6",  url: "https://youtube.com/shorts/HCGDCp3HdoQ" },   // DMI
  { id: "V19", url: "https://youtube.com/shorts/YqHk5HF41Lk" },   // Clínica da Linguagem - Apraxia
  { id: "V8",  url: "https://youtube.com/shorts/391KsDx-QKk" },   // Cookie Formiguinhas
  { id: "V20", url: "https://youtube.com/shorts/KLElLlFJ8r4" },   // Reservas corporativas
  { id: "V3",  url: "https://youtube.com/shorts/uu3fx032OF4" },   // Atendimento humanizado
  { id: "V5",  url: "https://youtube.com/shorts/KI8IT1CGKNI" },
  { id: "V4",  url: "https://youtube.com/shorts/TooWjeRW9rw" },
  { id: "V2",  url: "https://youtube.com/shorts/IFCVsyyH6WQ" },
  { id: "V1",  url: "https://youtube.com/shorts/rzJNPJcOCTs" },
];


/* ── Component ── */
const AudiovisualTab = () => {
  return (
    <div className="space-y-12">
      {/* Horizontal videos */}
      <div>
        <p className="font-body text-xs tracking-[0.25em] uppercase mb-6" style={{ color: "hsl(265 50% 63%)" }}>
          ◆ Vídeos horizontais
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {horizontalVideos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              className="rounded-xl overflow-hidden"
              style={{ aspectRatio: "16/9" }}
            >
              <iframe
                src={toEmbedUrl(v.url)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={v.label ?? v.id}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Vertical videos / Shorts */}
      <div>
        <p className="font-body text-xs tracking-[0.25em] uppercase mb-6" style={{ color: "hsl(160 60% 56%)" }}>
          ◆ Vídeos verticais
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 justify-items-center">
          {verticalVideos.map((v, i) => (
            <motion.div
              key={v.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
              className="w-full max-w-[320px] rounded-xl overflow-hidden"
              style={{ aspectRatio: "9/16" }}
            >
              <iframe
                src={toEmbedUrl(v.url)}
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={v.id}
                loading="lazy"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AudiovisualTab;
