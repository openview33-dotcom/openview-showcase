import { motion } from "framer-motion";

const OutrosServicosSection = () => {
  return (
    <section className="py-24 section-padding section-dark">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase mb-4" style={{ color: "hsl(265 50% 63%)" }}>◆ Outros serviços</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium mb-4 text-white">
            Além do conteúdo,<br />
            <span className="italic font-normal text-white/40">performance e presença.</span>
          </h2>
          <p className="font-body text-white/35 max-w-md mx-auto text-sm leading-relaxed font-light">
            Serviços complementares para marcas que querem crescer em todos os canais.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Tráfego Pago */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl overflow-hidden border border-white/8 hover:border-white/18 transition-colors"
            style={{ background: "#1a1a18" }}
          >
            <div className="h-40 relative overflow-hidden p-4" style={{ background: "#1e1520" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-[9px] tracking-[.2em] uppercase text-white/25">Resultado da campanha</span>
                <span className="font-body text-[9px] px-2 py-0.5 rounded-full" style={{ background: "rgba(155,111,212,0.15)", color: "hsl(265 50% 63%)" }}>↑ ao vivo</span>
              </div>
              <div className="grid grid-cols-3 gap-2 mb-3">
                {[{ val: "R$84k", label: "faturamento", color: "hsl(265 50% 63%)" }, { val: "4.2×", label: "ROAS", color: "#4ECFB0" }, { val: "312", label: "vendas", color: "#F9BC2D" }].map((k) => (
                  <div key={k.label} className="rounded-lg p-2" style={{ background: "rgba(255,255,255,0.04)" }}>
                    <div className="text-base font-semibold leading-none mb-0.5" style={{ color: k.color }}>{k.val}</div>
                    <div className="font-body text-[8px] text-white/25 tracking-wide">{k.label}</div>
                  </div>
                ))}
              </div>
              {[{ label: "Meta Ads", pct: "88%", val: "R$46k" }, { label: "Google Ads", pct: "62%", val: "R$28k" }, { label: "TikTok Ads", pct: "28%", val: "R$10k" }].map((s) => (
                <div key={s.label} className="flex items-center gap-2 mb-1">
                  <span className="font-body text-[8px] text-white/20 w-12">{s.label}</span>
                  <div className="flex-1 h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                    <div className="h-full rounded-full" style={{ width: s.pct, background: "hsl(265 50% 63%)" }}></div>
                  </div>
                  <span className="font-body text-[8px] text-white/25 w-8 text-right">{s.val}</span>
                </div>
              ))}
            </div>
            <div className="p-6">
              <p className="font-body text-[9px] tracking-[.25em] uppercase mb-2" style={{ color: "hsl(265 50% 63%)" }}>◆ Performance</p>
              <h3 className="font-display text-xl font-medium text-white mb-1">Tráfego Pago & Performance</h3>
              <p className="font-body text-xs italic text-white/40 mb-3">Mais resultado. Menos desperdício.</p>
              <p className="font-body text-xs text-white/30 leading-relaxed mb-4">Campanhas estruturadas, monitoradas e otimizadas continuamente para reduzir o CAC e escalar o que funciona — com ROI mensurável em cada real investido.</p>
              <div className="flex gap-1.5 flex-wrap">
                {["Meta Ads", "Google Ads", "TikTok Ads", "YouTube Ads"].map((p) => (
                  <span key={p} className="font-body text-[9px] text-white/30 border border-white/10 rounded-full px-2 py-0.5">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* SEO & GEO */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-2xl overflow-hidden border border-white/8 hover:border-white/18 transition-colors"
            style={{ background: "#1a1a18" }}
          >
            <div className="h-40 relative overflow-hidden p-4" style={{ background: "#141e1c" }}>
              <div className="flex items-center justify-between mb-3">
                <span className="font-body text-[9px] tracking-[.2em] uppercase text-white/25">Posicionamento orgânico</span>
              </div>
              <div className="flex flex-col gap-1.5">
                {[{ pos: "#1", label: "Google", pct: "95%", color: "#4ECFB0", opacity: "1" }, { pos: "#1", label: "ChatGPT", pct: "88%", color: "#4ECFB0", opacity: ".8" }, { pos: "#2", label: "Gemini", pct: "76%", color: "#4ECFB0", opacity: ".6" }, { pos: "#2", label: "Perplexity", pct: "70%", color: "#4ECFB0", opacity: ".45" }, { pos: "#3", label: "Bing AI", pct: "55%", color: "#4ECFB0", opacity: ".3" }].map((r) => (
                  <div key={r.label} className="flex items-center gap-2">
                    <span className="font-body text-[9px] font-semibold text-white/25 w-4">{r.pos}</span>
                    <div className="flex-1 h-[3px] rounded-full" style={{ background: "rgba(255,255,255,0.05)" }}>
                      <div className="h-full rounded-full" style={{ width: r.pct, background: r.color, opacity: r.opacity }}></div>
                    </div>
                    <span className="font-body text-[9px] w-14 text-right" style={{ color: `rgba(78,207,176,${r.opacity})` }}>{r.label}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-[9px] tracking-[.25em] uppercase mb-2" style={{ color: "#4ECFB0" }}>◆ Orgânico</p>
              <h3 className="font-display text-xl font-medium text-white mb-1">Blog, SEO & GEO</h3>
              <p className="font-body text-xs italic text-white/40 mb-3">Seja encontrado — no Google e nas IAs.</p>
              <p className="font-body text-xs text-white/30 leading-relaxed mb-4">Conteúdo que constrói autoridade orgânica e já está sendo indexado pelos modelos de IA generativa. Presença que cresce com o tempo, sem pagar por cada clique.</p>
              <div className="flex gap-1.5 flex-wrap">
                {["SEO técnico", "GEO", "Link building", "Blog"].map((p) => (
                  <span key={p} className="font-body text-[9px] text-white/30 border border-white/10 rounded-full px-2 py-0.5">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Agente de IA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="rounded-2xl overflow-hidden border border-white/8 hover:border-white/18 transition-colors"
            style={{ background: "#1a1a18" }}
          >
            <div className="h-40 relative overflow-hidden p-4" style={{ background: "#161618" }}>
              <div className="flex flex-col gap-2">
                <div className="self-start px-3 py-1.5 rounded-xl rounded-tl text-[11px] text-white/60 font-body" style={{ background: "rgba(255,255,255,0.08)" }}>Oi! Quero saber sobre os planos 👋</div>
                <div className="self-end px-3 py-1.5 rounded-xl rounded-tr text-[11px] text-white font-body" style={{ background: "hsl(265 50% 63%)" }}>Olá! Qual o seu segmento de negócio?</div>
                <div className="self-start px-3 py-1.5 rounded-xl rounded-tl text-[11px] text-white/60 font-body" style={{ background: "rgba(255,255,255,0.08)" }}>Sou do ramo de saúde</div>
                <div className="self-end px-3 py-1.5 rounded-xl rounded-tr text-[11px] text-white font-body" style={{ background: "hsl(265 50% 63%)" }}>Posso agendar uma conversa com nosso time?</div>
                <span className="self-end font-body text-[8px] text-white/20">Agente IA · respondeu em 2s</span>
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-[9px] tracking-[.25em] uppercase mb-2" style={{ color: "#F9BC2D" }}>◆ Automação</p>
              <h3 className="font-display text-xl font-medium text-white mb-1">Agente de IA para Atendimento</h3>
              <p className="font-body text-xs italic text-white/40 mb-3">Atendimento 24h, sem equipe extra.</p>
              <p className="font-body text-xs text-white/30 leading-relaxed mb-4">Agentes treinados com a voz da sua marca para qualificar leads, responder dúvidas e agendar — automaticamente, no WhatsApp ou no seu site.</p>
              <div className="flex gap-1.5 flex-wrap">
                {["WhatsApp", "Site", "Qualificação", "24h"].map((p) => (
                  <span key={p} className="font-body text-[9px] text-white/30 border border-white/10 rounded-full px-2 py-0.5">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* E-mail Marketing */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="rounded-2xl overflow-hidden border border-white/8 hover:border-white/18 transition-colors"
            style={{ background: "#1a1a18" }}
          >
            <div className="h-40 relative overflow-hidden p-4" style={{ background: "#1a1a14" }}>
              <div className="flex items-center justify-center gap-2 mb-3">
                {[{ label: "Lead", val: "entrada", color: "#F9BC2D" }, { label: "Nutrição", val: "automática", color: "rgba(249,188,45,.5)" }, { label: "Conversão", val: "+LTV", color: "rgba(249,188,45,.4)" }, { label: "Reativação", val: "recorrente", color: "rgba(249,188,45,.3)" }].map((s, i) => (
                  <div key={s.label} className="flex items-center gap-1">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: "rgba(249,188,45,0.1)" }}>
                        <div className="w-2 h-2 rounded-full" style={{ background: s.color }}></div>
                      </div>
                      <span className="font-body text-[7px] text-white/20">{s.label}</span>
                      <span className="font-body text-[7px]" style={{ color: s.color }}>{s.val}</span>
                    </div>
                    {i < 3 && <div className="w-4 h-px mb-4" style={{ background: "rgba(255,255,255,0.1)" }}></div>}
                  </div>
                ))}
              </div>
              <div className="flex gap-4 justify-center">
                {[{ val: "42%", label: "taxa de abertura" }, { val: "3.8×", label: "ROI médio" }, { val: "24h", label: "automação ativa" }].map((m) => (
                  <div key={m.label} className="text-center">
                    <div className="font-body text-lg font-semibold" style={{ color: "#F9BC2D" }}>{m.val}</div>
                    <div className="font-body text-[8px] text-white/20 tracking-wide">{m.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="p-6">
              <p className="font-body text-[9px] tracking-[.25em] uppercase mb-2" style={{ color: "#F9BC2D" }}>◆ Relacionamento</p>
              <h3 className="font-display text-xl font-medium text-white mb-1">E-mail Marketing</h3>
              <p className="font-body text-xs italic text-white/40 mb-3">O canal com maior ROI do marketing digital.</p>
              <p className="font-body text-xs text-white/30 leading-relaxed mb-4">Fluxos de automação e campanhas segmentadas que nutrem leads, aumentam o LTV e convertem em vendas — com rastreamento completo de cada etapa da jornada.</p>
              <div className="flex gap-1.5 flex-wrap">
                {["Automação", "Segmentação", "LTV", "Reativação"].map((p) => (
                  <span key={p} className="font-body text-[9px] text-white/30 border border-white/10 rounded-full px-2 py-0.5">{p}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OutrosServicosSection;
