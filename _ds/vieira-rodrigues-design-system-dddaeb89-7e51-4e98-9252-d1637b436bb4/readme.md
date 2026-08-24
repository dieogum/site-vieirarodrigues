# Vieira-Rodrigues Design System (v4)

Sistema visual e verbal da **Vieira-Rodrigues Advocacia** — escritório brasileiro de direito
urbanístico e imobiliário, com sede em João Pessoa/PB e filial em São Paulo/SP. Equipe
multidisciplinar: advogado, arquiteta e engenheiro. Atuação do estudo de viabilidade urbanística
e do licenciamento de obras à regularização, certificações e à tributação do patrimônio
(ITBI, outorga onerosa, locação, sucessão).

**Superfícies digitais representadas aqui:** site institucional (PT/EN), carrosséis de
Instagram/LinkedIn, newsletter tributária "Tributo em Dia", propostas de honorários e
documentos jurídicos diagramados.

## Fontes deste sistema

Tudo abaixo foi lido dos arquivos enviados — não há repositório público nem arquivo Figma.

| Fonte | Onde estava | O que forneceu |
| --- | --- | --- |
| `manual-de-marca.html` | `uploads/Vieira-Rodrigues Design System/` | Manual de marca v4 completo (marca, cor, tipografia, elementos, fotografia, voz, aplicações, checklist). Cópia em `guidelines/manual-de-marca.html`. |
| `codigo/styles.css` | idem | Folha de estilo real do site v4 — origem de todos os tokens. |
| `codigo/index.html` | idem | Página inicial: estrutura, copy e composição das seções. |
| `codigo/motion.js` | idem | Regras de movimento (reveal, header, parallax, filtros, reduced-motion). |
| `assets/*` | idem | logo-vr.png, hero-joao-pessoa.png, diego-cutout.png, diego-perfil.jpeg, area-itbi-1.jpg. |
| `fontes/Archivo-Variable.ttf` + `uploads/Archivo/` | idem | Família Archivo completa (variável + estáticas, SIL OFL). |
| `FORMULARIO.md` | idem | Onboarding: descrição do escritório, paleta, tipografia, forma, fotografia e voz. |
| `doc-page.js` | idem | Componente de paginação usado nos documentos. |

Sem repositório público. Site de produção: `https://vieira-rodrigues.com`.

## Índice do repositório

- `styles.css` — ponto de entrada; só `@import`.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `borders.css`, `motion.css`, `effects.css`, `base.css`.
- `assets/` — logo, fotografias e `assets/fonts/` (Archivo variável, romano e itálico, + licença OFL).
- `guidelines/` — 19 cartões de fundamento (cor, tipo, elementos, foto, espaço, movimento) e o manual de marca completo.
- `components/core|content|forms/` — os primitivos (JSX + `.d.ts` + `.prompt.md` + cartão).
- `ui_kits/site|carrossel|documentos|newsletter/` — recriações das quatro superfícies reais.
- `SKILL.md` — empacotamento como Agent Skill.

### Componentes

**core** — `BrandMark`, `Button`, `Eyebrow`, `Pill`, `PurpleBand`
**content** — `SectionHeader`, `Declaration`, `Accent`, `Stat`, `CapCard`, `ColumnCard`, `RuleList`, `Quote`, `Photo`, `ArticleCard`, `InsightRow`, `PersonCard`
**forms** — `Field`, `FilterChips`, `FaqItem`, `AnchorNav`

Uso: `const { Button } = window.VieiraRodriguesDesignSystem_dddaeb`.

**Adições intencionais** (não existiam como componente no código-fonte, foram extraídas de classes
CSS reais do site v4, sem inventar aparência): `BrandMark` (o lock-up estava repetido em markup
em hero, header e rodapé), `PurpleBand` (`.faixa-roxa`), `Declaration`/`Accent` (`.decl`, `.decl em`),
`RuleList` (`.col li::before`), `Field` (`.field`), `AnchorNav` (`.subnav`/`.anchors`).
Nenhum primitivo de "biblioteca padrão" (Toast, Avatar, Tabs, Switch…) foi criado — o site não os tem.

---

## CONTENT FUNDAMENTALS

**Voz:** formal-humana, técnica, sem juridiquês. Trata o leitor por **"você"**; o escritório fala
em **primeira pessoa do plural** ("reunimos", "atuamos") e em primeira pessoa do singular quando
é o advogado quem fala ("respondo pessoalmente", "Falar comigo").

**Regras de escrita**
- Frase curta, uma ideia por frase. Verbo no presente, voz ativa.
- O mecanismo antes da conclusão: explica como a regra funciona, depois o efeito.
- Nunca promete resultado. Nenhum superlativo — sem "excelência", "soluções", "sob medida", "personalizado".
- Termo técnico só quando necessário, explicado na mesma frase.
- Números em algarismo, com zero à esquerda quando cabe ("03 idiomas", "16 anos"), destacados em roxo.
- **Casing:** títulos em caixa mista. Caixa alta só na marca, em eyebrows/rótulos e em navegação.
- Nenhum emoji, em nenhuma superfície. Nenhum ícone ilustrativo.
- Itálico não é usado; ênfase por peso 700, cor roxa ou fio roxo de citação.
- Todo texto público em pt-BR; o site tem versão EN paralela.

**Exemplos (do próprio site e do manual)**
- Título: "Licenciamento, regularização e a estratégia jurídica do seu empreendimento."
- Título com segunda linha suave: "Com você nas decisões / que definem o empreendimento."
- Nota lateral: "Ler a legislação até o fim, projetar o caminho antes de protocolar e sustentar o enquadramento diante do órgão."
- Assim: "O ITBI é calculado sobre o valor da transação, não sobre a base arbitrada pelo município."
- Não assim: "Cumpre salientar, data venia, que a exação tem por base de cálculo o valor venal do bem imóvel transmitido."
- Não assim: "Assessoria jurídica especializada e personalizada, com excelência e comprometimento."
- CTA: "Ver o que fazemos ↗", "Falar com o advogado ↗", "Falar comigo ↗", "Como agendar ↗", "Assinar ↗".
- Rótulos: "Especialidades", "Setores", "Equipe", "Atendimento", "Conteúdo", "Primeiro passo".

**Encerramento obrigatório de toda peça pública:**
"Conteúdo informativo. Não constitui consulta nem oferta de serviços."
O site carrega ainda o aviso de publicidade advocatícia (Provimento nº 205/2021 do CFOAB) no rodapé.

---

## VISUAL FOUNDATIONS

**Fundamento:** precisão sem frieza. Escritório técnico, direto e contemporâneo — nenhum brasão,
nenhuma serifada, nenhum ornamento. A autoridade vem da estrutura: grotesca pesada, cantos retos,
muito papel e um único ponto de cor. A página se organiza como publicação editorial.

**Cor.** Três famílias e nada mais. Papel: `#F5F2E9` (padrão), `#EBE7DA` (seção alternada),
`#DDD7C7` (fios/superfície inerte), `#F1E3FE` (realce raríssimo). Tinta: `#141310` (texto e blocos),
`#2C2A25`, `#6E6A60` (secundário), `#232019` (cartão/formulário no escuro). Roxo — único acento:
`#8412D8` para texto sobre claro, `#C77BFF` para texto sobre escuro, `#A93CF7` só como superfície
(quadrado, faixa, foco, botão). **Nunca azul, nunca verde.** Proporção ~70% papel / 25% tinta / 5% roxo;
no máximo duas cores de fundo por peça; seções claras e escuras alternam, nunca três escuras seguidas.

**Tipografia.** Uma família só: **Archivo**, do display à nota. Marca 800 / −.045em / 0.88 / caixa alta;
títulos 700 / −.032em / 1.02 em caixa mista (clamp 32–58 px); H3 21 px / −.02em; corpo 400 / 17 px / 1.6;
nota 500 / 13–14.5 px em Ink 3; eyebrow 700 / 11.5 px / .15em em caixa alta. Números tabulares.
Medidas: 40–46 caracteres em notas, 74 em texto corrido. Substituta quando Archivo não existir:
`system-ui, sans-serif` — nunca Inter, Roboto ou Arial estilizado, nunca serifada.

**Forma e cartões.** Raio **zero** em tudo — botão, campo, imagem, faixa. Nenhuma sombra decorativa,
nenhum cartão com borda arredondada, nenhum cartão com borda colorida à esquerda. O "cartão" do sistema
é uma **coluna com fio de 1 px acima** (`1px solid var(--ink)` no claro, `rgba(255,255,255,.16)` no escuro)
e respiro de 20 px. O único `box-shadow` do sistema é o do botão flutuante de WhatsApp
(`0 6px 22px rgba(20,19,16,.28)`).

**Elementos estruturais.** Quadrado roxo de 9 px (marca, eyebrow) e 8 px (pílula); marcador de lista =
fio roxo de 7 px × 1 px; faixa roxa de 16 px antes do rodapé (10 px em documento); citação com fio roxo
de 4 px e recuo de 26 px; pílula de rótulo em tinta com texto branco.

**Layout.** Grade de 12 colunas, largura máxima 1280 px, respiro lateral 40 px (20 px no mobile).
Seção respira 104 px acima e abaixo (66 px no mobile). Cabeçalho de seção partido: 1.35fr título /
0.65fr nota, gap 28/56 px, 56 px até o conteúdo. Grades de conteúdo em `repeat(auto-fit,minmax(240–340px,1fr))`
com gap 36–40 px. Fixos: header absoluto sobre o hero, botão de WhatsApp fixo a 20 px do canto inferior direito.

**Fundos e imagens.** Sem gradiente decorativo, sem textura, sem padrão repetido, sem ilustração vetorial.
Fotografia é documental — cidade, obra, terreno, equipe — e **sempre em preto e branco**:
`grayscale(1) contrast(1.05)`. Cor só aparece no hover de imagem clicável. O hero recebe
`grayscale(.6) sepia(.62) saturate(1.5) brightness(.6) contrast(1.05)` sob um scrim
`linear-gradient(180deg, rgba(20,19,16,.6), rgba(28,20,10,.2) 34%, rgba(20,19,16,.88))` — daí o leve tom
sépia/quente do hero, que combina com o creme. Proporções: 4:3 conteúdo, 16:10 artigo, 21:9 faixa, 4:5 retrato.
Nada de banco de imagens com aperto de mão, martelo ou balança.

**Transparência e blur.** Só em dois lugares: o header ao rolar (`rgba(20,19,16,.92)` + `blur(12px)`) e
o scrim do hero. Texto sobre tinta usa branco a 66% (corpo), 50% (segunda linha de título), 45–48% (legal).
Fios translúcidos: `rgba(20,19,16,.14)` no claro, `rgba(255,255,255,.16)` no escuro.

**Movimento.** Easing único `cubic-bezier(.2,.7,.2,1)`. Revelação no scroll: opacidade 0→1 +
`translateY(26px)` em 0.75 s, escalonada 60 ms por item. Hero sobe 34 px em 1–1.1 s. Parallax leve
(marca 0.22, foto 0.08). Link de nav ganha fio roxo que corre da esquerda em 0.35 s. Foto amplia 1.03
e ganha cor em 0.45 s. Cor de link em 0.18 s, botão e chip em 0.2 s. **Nenhum bounce, nenhum spring,
nenhuma entrada com escala.** Tudo suprimido em `prefers-reduced-motion`.

**Estados.** Hover: botão sólido tinta → roxo-deep; botão creme → roxo; contorno inverte para tinta cheia;
link de rodapé/topbar → roxo-light; item de lista → texto roxo-deep e fio roxo; retrato → fundo roxo-deep;
artigo → título roxo-deep e foto colorida. Press: nenhum shrink ou deslocamento — a mudança é de cor.
Foco: `outline: 2px solid var(--roxo)` com offset 0 e borda transparente (campos). Disabled: opacidade 0.4.
FAQ abre com `+` → `–` em roxo-deep.

**Checklist antes de publicar** (do manual): só Archivo, títulos em caixa mista; no máximo duas cores de
fundo e roxo abaixo de 10% da área; roxo certo para o fundo (deep no claro, light no escuro); todos os
cantos retos e sem sombra decorativa; fotos em P&B; respiro de uma linha ao redor da marca; texto trata
por "você", sem juridiquês nem superlativo; disclaimer presente.

---

## ICONOGRAPHY

**O sistema é deliberadamente sem ícones.** O manual proíbe: "nenhum ícone ilustrativo, nenhuma
ilustração vetorial, nenhum emoji". Não há biblioteca de ícones, fonte de ícones nem sprite no
código-fonte, e nenhum foi adicionado aqui — não há substituição de CDN a declarar.

O que faz o papel de iconografia:
- **Quadrado roxo** de 8–9 px — marca, eyebrow, pílula. É o único elemento gráfico da marca.
- **Fios de 1 px** — separam itens e colunas no lugar de ícones e cartões.
- **Fio roxo de 7 px** — marcador de lista.
- **Caracteres unicode**, em dois usos apenas: `↗` na seta dos botões e links de ação (desloca 2 px no
  hover) e `+` / `–` no FAQ.
- **Um único SVG inline** em todo o site: o glifo do WhatsApp no botão flutuante — recriado em
  `ui_kits/site/Shell.jsx` a partir do path original de `codigo/index.html`, não redesenhado.

**Marca.** `assets/logo-vr.png` é o monograma "VR" em branco sobre tinta usado como favicon/ícone de app
(256×256). A marca propriamente dita **não é um arquivo de imagem**: é o nome composto em Archivo 800,
empilhado, com hífen e quadrado roxos — reproduzido pelo componente `BrandMark`. Não existe logotipo
vetorial nos arquivos enviados e nenhum foi desenhado.

**Imagens disponíveis** em `assets/`: `hero-joao-pessoa.png` (full-bleed do hero), `area-itbi-1.jpg`
(edificação, conteúdo/artigos), `diego-perfil.jpeg` (retrato), `diego-cutout.png` (recorte para social).
Não há ilustrações genéricas no acervo enviado.

---

## Pendências herdadas do material original

- Número de inscrição na OAB: `OAB/PB nº [PREENCHER]` (o próprio site traz o comentário de atenção).
- Dois perfis da equipe ainda `[Nome a definir]` (arquiteta e engenheiro).
- Versão EN do site não foi enviada — o kit mostra apenas o seletor `EN`.
