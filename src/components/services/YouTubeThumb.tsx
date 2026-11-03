import { useState } from "react";

const QUALITIES = ["maxresdefault", "sddefault", "hqdefault"] as const;

interface YouTubeThumbProps {
  videoId: string;
  alt: string;
  className?: string;
}

/**
 * Renderiza a capa do vídeo do YouTube na maior resolução disponível,
 * caindo para a próxima qualidade quando a anterior não existe (404).
 */
export const YouTubeThumb = ({ videoId, alt, className }: YouTubeThumbProps) => {
  const [qualityIndex, setQualityIndex] = useState(0);

  return (
    <img
      src={`https://i.ytimg.com/vi/${videoId}/${QUALITIES[qualityIndex]}.jpg`}
      alt={alt}
      className={className}
      loading="lazy"
      draggable={false}
      onError={() => setQualityIndex(i => Math.min(i + 1, QUALITIES.length - 1))}
    />
  );
};
