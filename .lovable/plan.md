

## Plano: Redesenhar os icones flutuantes da aba Trafego Pago (estilo referencia V4)

### Problemas identificados
1. Meta esta com logo do Facebook (path SVG errado), precisa do logo correto da Meta (infinito)
2. Icones menores estao com blur, o que nao era desejado
3. Fundo dos icones esta quadrado (rounded-2xl), referencia usa circulos
4. Falta sensacao de profundidade real (tamanhos variados + circulos escuros ao fundo)
5. Layout nao ocupa espaco suficiente, falta presenca visual

### O que muda

**1. Corrigir o SVG da Meta** para o logo correto (infinito/lemniscata), nao o "f" do Facebook.

**2. Remover blur de todos os icones.** A profundidade vem apenas da variacao de tamanho e opacidade sutil, nao de desfoque.

**3. Trocar fundo dos icones de `rounded-2xl` para `rounded-full`** (circulos), como na referencia V4.

**4. Adicionar circulo escuro de fundo** atras de cada icone (um disco semi-transparente maior que o icone), criando o efeito visual da referencia onde cada logo "flutua" dentro de uma bolha escura/cinza.

**5. Redistribuir posicoes e tamanhos** para criar composicao mais equilibrada e organica:
- Instagram: grande (~110px disco), posicao centro-esquerda
- Google Ads: grande (~100px disco), posicao direita-superior
- Meta: medio (~90px disco), centro-direita
- YouTube: medio (~70px disco), centro-esquerda-baixo
- LinkedIn: medio (~65px disco), esquerda
- TikTok: pequeno (~55px disco), esquerda-baixo

**6. Aumentar altura do container** para ~420px para dar mais respiro.

**7. Manter animacao de flutuacao** (y oscilatoria com framer-motion), sem blur.

### Arquivo alterado
- `src/components/OutrosServicosSection.tsx` (unico arquivo)

### Detalhe tecnico
- Array `platforms`: corrigir SVG Meta, remover prop `blur`, ajustar `size`/`top`/`left`, adicionar prop `discSize` para o circulo de fundo
- `TrafegoVisual`: cada icone renderiza um disco `rounded-full` com `bg` semi-transparente escuro + o icone centralizado dentro
- Remover `filter: blur()` do style do motion.div
- Todos os icones com `opacity: 1`

