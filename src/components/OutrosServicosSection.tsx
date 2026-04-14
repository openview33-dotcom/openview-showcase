import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "trafego", label: "Tráfego Pago", color: "#9B6FD4" },
  { key: "seo", label: "SEO & GEO", color: "#4ECFB0" },
  { key: "email", label: "E-mail Marketing", color: "#F9BC2D" },
  { key: "crm", label: "CRM", color: "#9B6FD4" },
  { key: "ia", label: "Agente de IA", color: "#4ECFB0" },
];

const floatVariants = [
  { y: [0, -8, 0], duration: 5.0 },
  { y: [0, 12, 0], duration: 4.2 },
  { y: [0, -14, 0], duration: 3.8 },
  { y: [0, -10, 0], duration: 4.6 },
  { y: [0, 16, 0], duration: 3.4 },
];

const seoSources = [
  { pos: "#1", name: "Google", barColor: "#4285F4", pct: 95, iconBg: "#EA4335", iconText: "G" },
  { pos: "#1", name: "ChatGPT", barColor: "#10a37f", pct: 88, iconBg: "#10a37f", iconText: "AI" },
  { pos: "#2", name: "Gemini", barColor: "#4ECFB0", pct: 74, iconBg: "#1C75BC", iconText: "G" },
  { pos: "#2", name: "Perplexity", barColor: "#4ECFB0", pct: 65, iconBg: "#20BDFF", iconText: "P" },
  { pos: "#3", name: "Bing AI", barColor: "#4ECFB0", pct: 50, iconBg: "#0078D4", iconText: "B" },
];

const flowSteps = [
  { title: "Lead entra na base", sub: "Formulário, landing page ou integração", color: "rgba(249,188,45,0.15)" },
  { title: "Sequência de nutrição", sub: "E-mails automáticos por comportamento", color: "rgba(249,188,45,0.12)" },
  { title: "Conversão", sub: "Venda no momento certo", color: "rgba(249,188,45,0.10)" },
  { title: "Fidelização e reativação", sub: "LTV crescente, clientes ativos", color: "rgba(249,188,45,0.08)" },
];

const crmCols = [
  { col: "Leads", dot: "#9B6FD4", tagBg: "#EDE9FE", tagColor: "#6D28D9", tag: "Novo", items: [{ name: "Clínica Bem Estar", val: "R$ 3.200/mês" }, { name: "Pet Shop União", val: "R$ 1.800/mês" }, { name: "Studio Pilates", val: "R$ 2.400/mês" }] },
  { col: "Negociando", dot: "#F9BC2D", tagBg: "#FEF3C7", tagColor: "#92400E", tag: "Proposta", items: [{ name: "Advocacia Silva", val: "R$ 8.500/mês" }, { name: "Construtora RJ", val: "R$ 22.000/mês" }, { name: "Escola Futuro", val: "R$ 14.500/mês" }] },
  { col: "Ganho ✓", dot: "#4ECFB0", tagBg: "#D1FAE5", tagColor: "#065F46", tag: "Ganho", items: [{ name: "Farmácia Saúde", val: "R$ 24.000/mês" }, { name: "Clínica Dental", val: "R$ 20.000/mês" }] },
];

const chatMsgs = [
  { side: "l", text: "Oi! Quero saber mais sobre os planos de vocês 👋" },
  { side: "r", text: "Olá! Que bom ter você aqui. Me conta: qual o segmento do seu negócio?" },
  { side: "l", text: "Sou do ramo de saúde, tenho uma clínica" },
  { side: "r", text: "Perfeito! Temos experiência com clínicas. Posso agendar uma conversa com nosso time?" },
  { side: "l", text: "Pode ser, qual o horário disponível?" },
  { side: "r", text: "Temos horários amanhã às 10h, 14h ou 16h. Qual prefere?" },
];

function TrafegoVisual() {
  const icons = [
    { svg: <svg width="70" height="70" viewBox="0 0 24 24"><defs><radialGradient id="ig" cx="30%" cy="107%" r="150%"><stop offset="0%" stopColor="#fdf497"/><stop offset="45%" stopColor="#fd5949"/><stop offset="60%" stopColor="#d6249f"/><stop offset="90%" stopColor="#285AEB"/></radialGradient></defs><rect width="24" height="24" rx="5" fill="url(#ig)"/><rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="white" strokeWidth="1.8"/><circle cx="12" cy="12" r="4.5" fill="none" stroke="white" strokeWidth="1.8"/><circle cx="17" cy="7" r="1.2" fill="white"/></svg>, size: 160, top: 0, left: 60, zIndex: 1 },
    { svg: <svg width="65" height="65" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>, size: 150, top: 30, left: 220, zIndex: 1 },
    { svg: <svg width="44" height="44" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="#0A66C2"/></svg>, size: 100, top: 140, left: 0, zIndex: 2 },
    { svg: <svg width="36" height="26" viewBox="0 0 24 17"><path d="M23.495 2.91A3.01 3.01 0 0021.38.78C19.505.25 12 .25 12 .25S4.495.25 2.62.78A3.01 3.01 0 00.505 2.91 31.6 31.6 0 000 8.5a31.6 31.6 0 00.505 5.59 3.01 3.01 0 002.115 2.13C4.495 16.75 12 16.75 12 16.75s7.505 0 9.38-.53a3.01 3.01 0 002.115-2.13A31.6 31.6 0 0024 8.5a31.6 31.6 0 00-.505-5.59zM9.545 12.02V4.98L15.818 8.5l-6.273 3.52z" fill="#FF0000"/></svg>, size: 80, top: 160, left: 150, zIndex: 2 },
    { svg: <svg width="30" height="30" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.17a8.16 8.16 0 004.77 1.52V7.25a4.85 4.85 0 01-1-.56z" fill="white"/></svg>, size: 60, top: 220, left: 60, zIndex: 3 },
  ];

  return (
    <div className="relative" style={{ height: 320, width: "100%" }}>
      {icons.map((icon, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: floatVariants[i].y,
          }}
          transition={{
            opacity: { duration: 0.5, delay: i * 0.1 },
            scale: { duration: 0.5, delay: i * 0.1, type: "spring", stiffness: 180 },
            y: { duration: floatVariants[i].duration, repeat: Infinity, ease: "easeInOut" },
          }}
          whileHover={{ scale: 1.08 }}
          style={{
            position: "absolute",
            width: icon.size,
            height: icon.size,
            top: icon.top,
            left: icon.left,
            zIndex: icon.zIndex,
            borderRadius: "50%",
            background: "radial-gradient(circle at 30% 30%, rgba(210, 200, 185, 0.18), rgba(160, 155, 145, 0.10) 50%, rgba(120, 115, 108, 0.06) 100%)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            boxShadow: "0 12px 32px rgba(0,0,0,0.25), inset 0 1px 0 rgba(255,255,255,0.06)",
          }}
        >
          {icon.svg}
        </motion.div>
      ))}
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="rounded-2xl p-6 border border-border/40" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)" }}>
      <p className="font-body text-[10px] tracking-[.2em] uppercase text-muted-foreground/60 mb-5 font-medium">Posicionamento orgânico</p>
      {seoSources.map((s, i) => (
        <div key={s.name} className="flex items-center gap-3 py-3 border-b border-border/20 last:border-0">
          <span className="font-body text-[11px] font-semibold text-muted-foreground/30 w-5">{s.pos}</span>
          <div className="flex-1 h-1.5 bg-muted/60 rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ duration: 1, delay: i * 0.12, ease: "easeOut" }} className="h-full rounded-full" style={{ background: s.barColor }} />
          </div>
          <div className="flex items-center gap-2 w-24">
            <div className="w-5 h-5 rounded-md flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: s.iconBg, fontSize: 8 }}>{s.iconText}</div>
            <span className="font-body text-[11px] text-foreground/60 font-medium">{s.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmailVisual() {
  return (
    <div className="rounded-2xl p-6 border border-border/40" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)" }}>
      <p className="font-body text-[10px] tracking-[.2em] uppercase text-muted-foreground/60 mb-5 font-medium">Jornada automatizada</p>
      {flowSteps.map((step, i) => (
        <div key={step.title}>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-4 py-3">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: step.color }}>
              <span style={{ color: "#F9BC2D", fontSize: 14 }}>◆</span>
            </div>
            <div>
              <p className="font-body text-sm font-medium text-foreground">{step.title}</p>
              <p className="font-body text-xs text-muted-foreground/70 mt-0.5">{step.sub}</p>
            </div>
          </motion.div>
          {i < flowSteps.length - 1 && <div className="w-px h-4 bg-border/30 ml-[18px]" />}
        </div>
      ))}
    </div>
  );
}

function CrmVisual() {
  return (
    <div className="rounded-2xl p-5 border border-border/40" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)" }}>
      <p className="font-body text-[10px] tracking-[.2em] uppercase text-muted-foreground/60 mb-4 font-medium">Pipeline de vendas</p>
      <div className="grid grid-cols-3 gap-2">
        {crmCols.map((col) => (
          <div key={col.col}>
            <div className="flex items-center gap-1.5 mb-2.5">
              <div className="w-2 h-2 rounded-full" style={{ background: col.dot }} />
              <p className="font-body text-[9px] uppercase tracking-wider text-muted-foreground/60 font-medium">{col.col}</p>
            </div>
            {col.items.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-white border border-border/30 rounded-xl p-2.5 mb-2" style={{ boxShadow: "0 1px 3px rgba(0,0,0,0.04)" }}>
                <p className="font-body text-[11px] font-medium text-foreground leading-tight">{item.name}</p>
                <p className="font-body text-[10px] text-muted-foreground/60 mt-0.5">{item.val}</p>
                <span className="inline-block font-body text-[8px] rounded-full px-2 py-0.5 mt-1.5 font-medium" style={{ background: col.tagBg, color: col.tagColor }}>{col.tag}</span>
              </motion.div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function IaVisual() {
  return (
    <div className="rounded-2xl border border-border/40 overflow-hidden" style={{ background: "rgba(255,255,255,0.7)", backdropFilter: "blur(20px)" }}>
      <div className="flex items-center gap-3 px-5 py-3.5 border-b border-border/20" style={{ background: "rgba(78,207,176,0.06)" }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: "#4ECFB0" }} />
        <div>
          <p className="font-body text-sm font-medium text-foreground">Agente OpenView</p>
          <p className="font-body text-[10px] text-muted-foreground/50">online agora</p>
        </div>
      </div>
      <div className="flex flex-col gap-2.5 p-5">
        {chatMsgs.map((msg, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: i * 0.08, duration: 0.3 }} className={`flex ${msg.side === "r" ? "justify-end" : "justify-start"}`}>
            <div
              className="font-body text-xs leading-relaxed px-4 py-2.5 max-w-[80%]"
              style={{
                background: msg.side === "r" ? "hsl(265 50% 63%)" : "#f0efeb",
                color: msg.side === "r" ? "#fff" : "#444",
                borderRadius: msg.side === "r" ? "16px 4px 16px 16px" : "4px 16px 16px 16px",
              }}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}
        <p className="font-body text-[9px] text-muted-foreground/40 text-right mt-1">Agente IA · respondeu em 2s</p>
      </div>
    </div>
  );
}

const panels: Record<string, { title: string; desc: string; bullets: string[]; visual: React.ReactNode; accent: string }> = {
  trafego: {
    title: "Gestão de mídia paga focada em conversão e resultado real.",
    desc: "Gerenciamos campanhas no Meta, Google, TikTok e YouTube com foco total em conversão e ROI mensurável. Cada campanha é estruturada com base no seu negócio, monitorada continuamente e otimizada para reduzir o custo de aquisição e escalar o que realmente funciona. Estratégia, criativo e dados trabalhando juntos, do primeiro clique à venda.",
    bullets: ["Planejamento estratégico baseado no seu público e mercado", "Gestão de anúncios no Meta, Google, TikTok, YouTube e LinkedIn", "Criação e teste contínuo de criativos para maximizar conversão", "Relatórios claros com foco em resultado, não em vaidade"],
    visual: <TrafegoVisual />,
    accent: "#9B6FD4",
  },
  seo: {
    title: "Seja encontrado onde seu cliente busca. No Google e nas IAs.",
    desc: "Produzimos conteúdo estratégico que posiciona sua marca nas primeiras posições do Google e, cada vez mais, nas respostas do ChatGPT, Gemini e Perplexity. O GEO (Generative Engine Optimization) é o novo SEO: preparamos seu conteúdo para ser citado pelos modelos de IA generativa. Uma presença que cresce com o tempo, sem depender de verba de mídia.",
    bullets: ["SEO técnico, on-page e link building para ranquear no Google", "GEO: conteúdo otimizado para ser citado por IAs generativas", "Produção de blog com foco em intenção de busca real", "Autoridade de domínio que reduz dependência de anúncios pagos"],
    visual: <SeoVisual />,
    accent: "#4ECFB0",
  },
  email: {
    title: "O canal com maior ROI do marketing digital. E quase ninguém usa direito.",
    desc: "E-mail marketing é muito mais do que disparar newsletter. Criamos fluxos de automação inteligentes que se ativam pelo comportamento do lead, desde o primeiro contato até a recompra. Cada mensagem chega na hora certa, para a pessoa certa, com o conteúdo certo. Sem depender de algoritmo, com rastreamento completo de cada etapa.",
    bullets: ["Fluxos automáticos ativados por comportamento do lead", "Segmentação por perfil, interesse e estágio no funil", "Campanhas de reativação para leads frios e clientes inativos", "Rastreamento ponta a ponta, de abertura à conversão"],
    visual: <EmailVisual />,
    accent: "#F9BC2D",
  },
  crm: {
    title: "Visualize seu funil. Venda com mais controle.",
    desc: "Implementamos e gerenciamos a Gestão de Relacionamento com o Cliente da sua empresa. Com um CRM bem estruturado, você acompanha cada lead em tempo real, mantém conexão ativa com sua base e cria campanhas mais personalizadas, aumentando a conversão em cada etapa do funil.",
    bullets: ["Estruturação e configuração do funil de vendas", "Acompanhamento em tempo real de cada lead e oportunidade", "Integração com e-mail, WhatsApp e campanhas de marketing", "Relatórios de performance comercial e taxa de conversão"],
    visual: <CrmVisual />,
    accent: "#9B6FD4",
  },
  ia: {
    title: "Atendimento 24h que qualifica, responde e agenda. Sem equipe extra.",
    desc: "Desenvolvemos agentes de IA treinados com a identidade, linguagem e informações exclusivas da sua empresa. Eles atendem no WhatsApp, Instagram ou site, qualificam leads automaticamente, respondem dúvidas com precisão e agendam reuniões em tempo real, sem custo operacional adicional.",
    bullets: ["Agente treinado com a voz, tom e dados exclusivos da sua marca", "Qualificação automática de leads antes do contato humano", "Integração com WhatsApp, Instagram Direct e chat do site", "Follow-up automático e agendamento de reuniões 24/7"],
    visual: <IaVisual />,
    accent: "#4ECFB0",
  },
};

const OutrosServicosSection = () => {
  const [active, setActive] = useState("trafego");
  const panel = panels[active];

  return (
    <section className="py-28 section-padding" style={{ background: "#F5F4F0" }}>
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <p className="font-body text-xs tracking-[.35em] uppercase mb-4" style={{ color: "hsl(265 50% 63%)" }}>
            ◆ Outros serviços
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-5 text-foreground">
            Além do conteúdo,{" "}
            <span className="italic font-normal" style={{ color: "hsl(265 50% 63%)" }}>
              performance e presença.
            </span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg leading-relaxed font-light">
            Serviços complementares para marcas que querem crescer em todos os canais, com estratégia, dados e tecnologia.
          </p>
        </motion.div>

        {/* Pill Tabs */}
        <div className="flex gap-2 mb-12 overflow-x-auto pb-1">
          {tabs.map((tab) => {
            const isActive = active === tab.key;
            return (
              <button
                key={tab.key}
                onClick={() => setActive(tab.key)}
                className="relative px-5 py-2.5 font-body text-[11px] tracking-[.15em] uppercase transition-all duration-300 whitespace-nowrap flex-shrink-0 rounded-full border font-medium"
                style={{
                  background: isActive ? tab.color : "transparent",
                  color: isActive ? "#fff" : "#999",
                  borderColor: isActive ? tab.color : "rgba(0,0,0,0.08)",
                  cursor: "pointer",
                }}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
          >
            {/* Text */}
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-5 leading-tight">
                {panel.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-8 font-light">
                {panel.desc}
              </p>
              <div className="flex flex-col gap-3.5 mb-10">
                {panel.bullets.map((b, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07 }}
                    className="flex items-start gap-3 font-body text-sm text-foreground/70"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                      style={{ background: panel.accent }}
                    />
                    {b}
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.a
                href="https://wa.me/5551999999999"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="inline-flex items-center gap-2 font-body text-sm font-medium text-white px-7 py-3.5 rounded-full transition-all duration-300 hover:opacity-90"
                style={{ background: panel.accent }}
              >
                Quero saber mais
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </motion.a>
            </div>

            {/* Visual */}
            <div>{panel.visual}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OutrosServicosSection;
