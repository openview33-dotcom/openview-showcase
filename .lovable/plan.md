

## Plano: Redesenhar os icones flutuantes da aba Trafego Pago

### O que muda

**1. Adicionar Instagram** ao array `platforms` com icone SVG, cor `#E4405F`, tamanho grande (~72px).

**2. Aumentar tamanhos e area visual** para criar mais profundidade e sensacao 3D:
- Meta: 100px (o maior, protagonista no centro)
- Google: 82px
- Instagram: 74px
- TikTok: 64px
- YouTube: 58px
- LinkedIn: 50px (o menor, mais "distante")

**3. Reposicionar** os icones para ocupar mais area vertical (aumentar height do container de 300px para ~380px) e distribuir melhor no espaco, evitando sobreposicoes.

**4. Adicionar efeito de profundidade** com `opacity` e `filter: blur()` leves nos icones menores (os mais "distantes") para simular profundidade de campo, alem de variar a amplitude de flutuacao (icones maiores flutuam menos, menores flutuam mais).

**5. Adicionar `floatVariants` para o 6o icone** (Instagram).

### Arquivo alterado
- `src/components/OutrosServicosSection.tsx` (unico arquivo)

### Detalhe tecnico
- Array `platforms`: adicionar Instagram, ajustar `size`, `top`, `left` de todos
- Array `floatVariants`: adicionar 6a entrada
- `TrafegoVisual`: container height 380px, aplicar `opacity` e `filter` proporcionais ao tamanho para efeito de profundidade

