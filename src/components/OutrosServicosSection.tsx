import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  { key: "trafego", label: "Tráfego Pago", color: "#9B6FD4" },
  { key: "seo", label: "SEO & GEO", color: "#4ECFB0" },
  { key: "email", label: "E-mail Marketing", color: "#F9BC2D" },
  { key: "crm", label: "CRM", color: "#9B6FD4" },
  { key: "ia", label: "Agente de IA", color: "#4ECFB0" },
];

const platforms = [
  { name: "Meta", bg: "#1877F2", size: 88, top: 0, left: "50%", tx: "-50%", shadow: "0 20px 40px rgba(24,119,242,0.35)", svg: (<svg width="36" height="36" viewBox="0 0 24 24" fill="white"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>) },
  { name: "Google", bg: "#fff", size: 72, top: 100, left: 0, tx: "0", shadow: "0 16px 32px rgba(0,0,0,0.12)", svg: (<svg width="30" height="30" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/></svg>) },
  { name: "TikTok", bg: "#010101", size: 62, top: 80, right: 0, tx: "0", shadow: "0 14px 28px rgba(0,0,0,0.4)", svg: (<svg width="26" height="26" viewBox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V9.17a8.16 8.16 0 004.77 1.52V7.25a4.85 4.85 0 01-1-.56z" fill="white"/></svg>) },
  { name: "YouTube", bg: "#FF0000", size: 56, top: 185, left: 20, tx: "0", shadow: "0 12px 24px rgba(255,0,0,0.35)", svg: (<svg width="24" height="17" viewBox="0 0 24 17"><path d="M23.495 2.91A3.01 3.01 0 0021.38.78C19.505.25 12 .25 12 .25S4.495.25 2.62.78A3.01 3.01 0 00.505 2.91 31.6 31.6 0 000 8.5a31.6 31.6 0 00.505 5.59 3.01 3.01 0 002.115 2.13C4.495 16.75 12 16.75 12 16.75s7.505 0 9.38-.53a3.01 3.01 0 002.115-2.13A31.6 31.6 0 0024 8.5a31.6 31.6 0 00-.505-5.59zM9.545 12.02V4.98L15.818 8.5l-6.273 3.52z" fill="white"/></svg>) },
  { name: "LinkedIn", bg: "#0A66C2", size: 50, top: 190, right: 40, tx: "0", shadow: "0 12px 24px rgba(10,102,194,0.4)", svg: (<svg width="22" height="22" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="white"/></svg>) },
  { name: "TikTok Shop", bg: "#010101", size: 44, top: 130, left: "50%", tx: "-50%", shadow: "0 10px 20px rgba(0,0,0,0.3)", svg: (<svg width="18" height="18" viewBox="0 0 24 24" fill="white"><path d="M6 2h12l2 6H4L6 2zM3 9h18v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9zm6 4v4m6-4v4"/></svg>) },
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
  return (
    <div className="relative h-72 w-full">
      {platforms.map((p, i) => (
        <motion.div key={p.name} initial={{ opacity: 0, scale: 0.6, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.5, delay: i * 0.08, type: "spring", stiffness: 200 }} whileHover={{ scale: 1.12, y: -4 }} className="absolute flex flex-col items-center gap-1.5 cursor-default" style={{ width: p.size, height: p.size, top: p.top, left: (p as any).left, right: (p as any).right, transform: `translateX(${p.tx})` }}>
          <div className="rounded-full flex items-center justify-center border border-white/10" style={{ width: p.size, height: p.size, background: p.bg, boxShadow: p.shadow }}>
            {p.svg}
          </div>
          <span className="font-body text-[9px] text-foreground/40 tracking-wide">{p.name}</span>
        </motion.div>
      ))}
    </div>
  );
}

function SeoVisual() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border/50" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
      <p className="font-body text-[9px] tracking-[.2em] uppercase text-muted-foreground mb-4">Posicionamento orgânico</p>
      {seoSources.map((s, i) => (
        <div key={s.name} className="flex items-center gap-3 py-2.5 border-b border-border/30 last:border-0">
          <span className="font-body text-[10px] font-semibold text-muted-foreground/40 w-5">{s.pos}</span>
          <div className="flex-1 h-1 bg-muted rounded-full overflow-hidden">
            <motion.div initial={{ width: 0 }} animate={{ width: `${s.pct}%` }} transition={{ duration: 0.8, delay: i * 0.1, ease: "easeOut" }} className="h-full rounded-full" style={{ background: s.barColor }} />
          </div>
          <div className="flex items-center gap-1.5 w-20">
            <div className="w-4 h-4 rounded flex items-center justify-center text-white font-bold flex-shrink-0" style={{ background: s.iconBg, fontSize: 7 }}>{s.iconText}</div>
            <span className="font-body text-[9px] text-muted-foreground">{s.name}</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function EmailVisual() {
  return (
    <div className="bg-white rounded-2xl p-6 border border-border/50" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
      <p className="font-body text-[9px] tracking-[.2em] uppercase text-muted-foreground mb-5">Jornada automatizada</p>
      {flowSteps.map((step, i) => (
        <div key={step.title}>
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.4, delay: i * 0.1 }} className="flex items-start gap-3 py-3">
            <div className="w-8 h-8 rounded-xl flex items-center justify-center text-sm flex-shrink-0" style={{ background: step.color }}>
              <span style={{ color: "#F9BC2D", fontSize: 14 }}>◆</span>
            </div>
            <div>
              <p className="font-body text-xs font-medium text-foreground">{step.title}</p>
              <p className="font-body text-[11px] text-muted-foreground">{step.sub}</p>
            </div>
          </motion.div>
          {i < flowSteps.length - 1 && <div className="w-px h-3 bg-border/40 ml-4" />}
        </div>
      ))}
    </div>
  );
}

function CrmVisual() {
  return (
    <div className="bg-white rounded-2xl p-5 border border-border/50" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
      <p className="font-body text-[9px] tracking-[.2em] uppercase text-muted-foreground mb-4">Pipeline de vendas</p>
      <div className="grid grid-cols-3 gap-2">
        {crmCols.map((col) => (
          <div key={col.col}>
            <div className="flex items-center gap-1.5 mb-2">
              <div className="w-1.5 h-1.5 rounded-full" style={{ background: col.dot }} />
              <p className="font-body text-[8px] uppercase tracking-wide text-muted-foreground">{col.col}</p>
            </div>
            {col.items.map((item, i) => (
              <motion.div key={item.name} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }} className="bg-muted/40 border border-border/40 rounded-lg p-2 mb-1.5">
                <p className="font-body text-[10px] font-medium text-foreground leading-tight">{item.name}</p>
                <p className="font-body text-[9px] text-muted-foreground mt-0.5">{item.val}</p>
                <span className="inline-block font-body text-[8px] rounded-full px-1.5 py-0.5 mt-1" style={{ background: col.tagBg, color: col.tagColor }}>{col.tag}</span>
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
    <div className="bg-white rounded-2xl border border-border/50 overflow-hidden" style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.08)" }}>
      <div className="flex items-center gap-2.5 px-4 py-3 border-b border-border/30 bg-muted/20">
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div>
          <p className="font-body text-xs font-medium text-foreground">Agente OpenView</p>
          <p className="font-body text-[9px] text-muted-foreground">online agora</p>
        </div>
      </div>
      <div className="flex flex-col gap-2 p-4">
        {chatMsgs.map((msg, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 6, scale: 0.97 }} animate={{ opacity: 1, y: 0, scale: 1 }} transition={{ delay: i * 0.08, duration: 0.3 }} className={`flex ${msg.side === "r" ? "justify-end" : "justify-start"}`}>
            <div className="font-body text-[11px] leading-relaxed px-3 py-2 max-w-[82%]" style={{ background: msg.side === "r" ? "hsl(265 50% 63%)" : "#f5f4f0", color: msg.side === "r" ? "#fff" : "#333", borderRadius: msg.side === "r" ? "14px 4px 14px 14px" : "4px 14px 14px 14px" }}>
              {msg.text}
            </div>
          </motion.div>
        ))}
        <p className="font-body text-[8px] text-muted-foreground/50 text-right mt-1">Agente IA · respondeu em 2s</p>
      </div>
    </div>
  );
}

const panels: Record<string, { title: string; desc: string; bullets: string[]; visual: React.ReactNode; accent: string }> = {
  trafego: { title: "Gestão de mídia paga focada em conversão e resultado real.", desc: "Gerenciamos campanhas no Meta, Google, TikTok e YouTube com foco total em conversão e ROI mensurável. Cada campanha é estruturada com base no seu negócio, monitorada continuamente e otimizada para reduzir o custo de aquisição e escalar o que realmente funciona. Estratégia, criativo e dados trabalhando juntos, do primeiro clique à venda.", bullets: ["Planejamento estratégico baseado no seu público e mercado", "Gestão de anúncios no Meta, Google, TikTok, YouTube e LinkedIn", "Criação e teste contínuo de criativos para maximizar conversão", "Relatórios claros com foco em resultado, não em vaidade"], visual: <TrafegoVisual />, accent: "#9B6FD4" },
  seo: { title: "Seja encontrado onde seu cliente busca — no Google e nas IAs.", desc: "Produzimos conteúdo estratégico que posiciona sua marca nas primeiras posições do Google — e, cada vez mais, nas respostas do ChatGPT, Gemini e Perplexity. O GEO (Generative Engine Optimization) é o novo SEO: preparamos seu conteúdo para ser citado pelos modelos de IA generativa. Uma presença que cresce com o tempo, sem depender de verba de mídia.", bullets: ["SEO técnico, on-page e link building para ranquear no Google", "GEO — conteúdo otimizado para ser citado por IAs generativas", "Produção de blog com foco em intenção de busca real", "Autoridade de domínio que reduz dependência de anúncios pagos"], visual: <SeoVisual />, accent: "#4ECFB0" },
  email: { title: "O canal com maior ROI do marketing digital — e quase ninguém usa direito.", desc: "E-mail marketing é muito mais do que disparar newsletter. Criamos fluxos de automação inteligentes que se ativam pelo comportamento do lead — desde o primeiro contato até a recompra. Cada mensagem chega na hora certa, para a pessoa certa, com o conteúdo certo. Sem depender de algoritmo, com rastreamento completo de cada etapa.", bullets: ["Fluxos automáticos ativados por comportamento do lead", "Segmentação por perfil, interesse e estágio no funil", "Campanhas de reativação para leads frios e clientes inativos", "Rastreamento ponta a ponta — de abertura à conversão"], visual: <EmailVisual />, accent: "#F9BC2D" },
  crm: { title: "Visualize seu funil. Venda com mais controle.", desc: "Implementamos e gerenciamos a Gestão de Relacionamento com o Cliente da sua empresa. Com um CRM bem estruturado, você acompanha cada lead em tempo real, mantém conexão ativa com sua base e cria campanhas mais personalizadas — aumentando a conversão em cada etapa do funil.", bullets: ["Estruturação e configuração do funil de vendas", "Acompanhamento em tempo real de cada lead e oportunidade", "Integração com e-mail, WhatsApp e campanhas de marketing", "Relatórios de performance comercial e taxa de conversão"], visual: <CrmVisual />, accent: "#9B6FD4" },
  ia: { title: "Atendimento 24h que qualifica, responde e agenda — sem equipe extra.", desc: "Desenvolvemos agentes de IA treinados com a identidade, linguagem e informações exclusivas da sua empresa. Eles atendem no WhatsApp, Instagram ou site, qualificam leads automaticamente, respondem dúvidas com precisão e agendam reuniões — em tempo real, sem custo operacional adicional.", bullets: ["Agente treinado com a voz, tom e dados exclusivos da sua marca", "Qualificação automática de leads antes do contato humano", "Integração com WhatsApp, Instagram Direct e chat do site", "Follow-up automático e agendamento de reuniões 24/7"], visual: <IaVisual />, accent: "#4ECFB0" },
};

const OutrosServicosSection = () => {
  const [active, setActive] = useState("trafego");
  const panel = panels[active];
  const activeTab = tabs.find(t => t.key === active)!;

  return (
    <section className="py-24 section-padding" style={{ background: "#F5F4F0" }}>
      <div className="max-w-6xl mx-auto">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="mb-10">
          <p className="font-body text-xs tracking-[.35em] uppercase mb-3" style={{ color: "hsl(265 50% 63%)" }}>◆ Outros serviços</p>
          <h2 className="font-display text-4xl md:text-5xl font-medium leading-tight mb-4 text-foreground">
            Além do conteúdo,{" "}
            <span className="italic font-normal" style={{ color: "hsl(265 50% 63%)" }}>performance e presença.</span>
          </h2>
          <p className="font-body text-base text-muted-foreground max-w-lg leading-relaxed font-light">Serviços complementares para marcas que querem crescer em todos os canais — com estratégia, dados e tecnologia.</p>
        </motion.div>

        <div className="flex gap-0 border-b border-border mb-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button key={tab.key} onClick={() => setActive(tab.key)} className="relative px-6 py-4 font-body text-xs tracking-widest uppercase transition-all duration-200 whitespace-nowrap flex-shrink-0 bg-transparent" style={{ color: active === tab.key ? "#111" : "#aaa", borderBottom: active === tab.key ? `2px solid ${tab.color}` : "2px solid transparent", cursor: "pointer" }}>
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={active} initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.35 }} className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center pt-14">
            <div>
              <h3 className="font-display text-2xl md:text-3xl font-medium text-foreground mb-5 leading-tight">{panel.title}</h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed mb-7 font-light">{panel.desc}</p>
              <div className="flex flex-col gap-3">
                {panel.bullets.map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -12 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.07 }} className="flex items-start gap-3 font-body text-sm text-foreground/70">
                    <div className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0" style={{ background: panel.accent }} />
                    {b}
                  </motion.div>
                ))}
              </div>
            </div>
            <div>{panel.visual}</div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default OutrosServicosSection;
