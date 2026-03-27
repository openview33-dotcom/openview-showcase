import { motion } from "framer-motion";
import { useState } from "react";
import { Play, Quote } from "lucide-react";

const videoTestimonials = [
  {
    name: "Márcio",
    videoId: "fpoIZ1X0gFw",
    thumb: `https://img.youtube.com/vi/fpoIZ1X0gFw/maxresdefault.jpg`,
  },
  {
    name: "Michelle",
    videoId: "TrAYtc9iDTo",
    thumb: `https://img.youtube.com/vi/TrAYtc9iDTo/maxresdefault.jpg`,
  },
  {
    name: "Dr. Arthur",
    videoId: "BaHM4EtbLDY",
    thumb: `https://img.youtube.com/vi/BaHM4EtbLDY/maxresdefault.jpg`,
  },
];

const textTestimonials = [
  {
    text: "Além da qualidade, o atendimento é impecável. A equipe é próxima, entende o negócio e entrega sempre além do esperado.",
    author: "Cliente OpenView",
  },
  {
    text: "Logo no primeiro mês já sentimos a diferença. As vendas aumentaram, o movimento cresceu e muitos clientes novos começaram a chegar na loja. Valeu cada centavo do investimento!",
    author: "Cliente OpenView",
  },
  {
    text: "Nosso negócio mudou completamente depois que começamos com a OpenView. Os clientes comentam, chegam pelo Instagram e elogiam a comunicação. Foi a melhor decisão que tomamos.",
    author: "Cliente OpenView",
  },
  {
    text: "Entraram muitos clientes novos! Percebemos que vieram do Google e do Instagram.",
    author: "Cliente OpenView",
  },
  {
    text: "Fiquei muito feliz com o resultado. É um salto de qualidade gigantesco. Parabenizo toda a equipe, estou certo de que fiz uma ótima escolha.",
    author: "Cliente OpenView",
  },
  {
    text: "Quando contratamos a OpenView, a ideia era só profissionalizar o Instagram da Polo. Mas o que aconteceu foi muito além disso. Desde a primeira entrega já deu pra sentir a diferença na qualidade.",
    author: "POLO Instaladora",
  },
];

const CasesSection = () => {
  const [activeTab, setActiveTab] = useState<"video" | "texto">("video");
  const [playingVideo, setPlayingVideo] = useState<string | null>(null);

  return (
    <section id="cases" className="py-32 section-padding bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-accent mb-4">
            Prova Social
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-6">
            Por que confiar na <span className="italic">OpenView</span>?
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Resultados reais, depoimentos reais. Veja o que nossos clientes têm a dizer.
          </p>
        </motion.div>

        {/* Tabs */}
        <div className="flex justify-center gap-1 mb-12">
          {(["video", "texto"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-8 py-3 font-body text-sm tracking-wider uppercase transition-all rounded-sm ${
                activeTab === tab
                  ? "bg-foreground text-primary-foreground"
                  : "bg-transparent text-muted-foreground hover:text-foreground"
              }`}
            >
              {tab === "video" ? "Depoimentos em Vídeo" : "Depoimentos em Texto"}
            </button>
          ))}
        </div>

        {/* Video testimonials */}
        {activeTab === "video" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {videoTestimonials.map((video) => (
              <div
                key={video.videoId}
                className="group relative aspect-[9/16] rounded-lg overflow-hidden bg-muted cursor-pointer"
                onClick={() => setPlayingVideo(video.videoId)}
              >
                {playingVideo === video.videoId ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&loop=1`}
                    className="absolute inset-0 w-full h-full"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title={`Depoimento ${video.name}`}
                  />
                ) : (
                  <>
                    <img
                      src={video.thumb}
                      alt={`Depoimento de ${video.name}`}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/20 group-hover:bg-foreground/30 transition-colors" />
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-accent/90 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                        <Play className="w-6 h-6 text-accent-foreground ml-1" />
                      </div>
                      <p className="font-body text-sm tracking-wider uppercase text-primary-foreground">
                        {video.name}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
          </motion.div>
        )}

        {/* Text testimonials */}
        {activeTab === "texto" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {textTestimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-background rounded-lg p-8 border border-border hover:border-accent/30 transition-colors"
              >
                <Quote className="w-8 h-8 text-accent/40 mb-4" />
                <p className="font-body text-foreground/90 leading-relaxed mb-6 text-sm">
                  "{item.text}"
                </p>
                <p className="font-body text-xs tracking-wider uppercase text-muted-foreground">
                  — {item.author}
                </p>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default CasesSection;
