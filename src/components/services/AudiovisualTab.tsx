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
  { id: "H4", url: "https://youtu.be/QGOij7iMpmQ" },
  { id: "H5", url: "https://youtu.be/LXhCkj86GnE" },
  { id: "H6", url: "https://youtu.be/OQQMcp_48GU" },
  { id: "H7", url: "https://youtu.be/f3y-VLJyl6c" },
];

const verticalVideos: VideoItem[] = [
  { id: "V1", url: "https://youtube.com/shorts/rzJNPJcOCTs" },
  { id: "V2", url: "https://youtube.com/shorts/IFCVsyyH6WQ" },
  { id: "V3", url: "https://youtube.com/shorts/NxxwapZoJI0" },
  { id: "V4", url: "https://youtube.com/shorts/TooWjeRW9rw" },
  { id: "V5", url: "https://youtube.com/shorts/KI8IT1CGKNI" },
  { id: "V6", url: "https://youtube.com/shorts/AOI0NhG5Qb0" },
  { id: "V7", url: "https://youtube.com/shorts/tnK1iUAwpV0" },
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
          ◆ Shorts / Verticais
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
