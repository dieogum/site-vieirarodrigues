# Site Vieira-Rodrigues Advocacia

Site institucional estático, versões PT e EN.

- `index.html` — versão em português
- `en.html` — versão em inglês
- `_ds/` — tokens, fontes e bundle do design system
- `uploads/`, `assets/` — fotografias e ilustração
- `support.js`, `image-slot.js` — runtime das páginas
- `.image-slots.state.json` — imagens dos espaços de foto (manter ao lado do HTML)
- `favicon.svg`, `apple-touch-icon.png` — ícones do site
- `.nojekyll` — necessário no GitHub Pages para servir a pasta `_ds/`
- `vercel.json` — cache de imagens e fontes na Vercel
- `_originais/` — fotos em alta resolução. **Não vai para o repositório.**

## Antes de subir para o GitHub — regra das imagens

O GitHub recusa upload pelo navegador quando a pasta fica grande, e foto de
banco de imagem vem em resolução de impressão (4000 a 6000 px, 5 a 11 MB cada).

**Regra:** nenhuma foto em `uploads/` passa de ~800 KB, e nenhuma passa de
2400 px no lado maior. A pasta `uploads/` inteira fica abaixo de 10 MB.

O arquivo em alta fica em `_originais/`, que é ignorado pelo Git.
**Nunca mover os arquivos de `_originais/` de volta para `uploads/`** — isso
desfaz a otimização e o upload volta a falhar.

Ao trocar ou acrescentar fotos: colocar a original em `_originais/`, a versão
reduzida em `uploads/`, com o mesmo nome de arquivo nos dois lugares.

## Publicar

**Vercel** (produção): projeto conectado ao repositório, branch `main`.
Framework Preset `Other`, Build Command e Output Directory vazios — é site
estático puro, não tem build.

**GitHub Pages** (alternativa): Settings → Pages → Branch `main`, pasta `/`.

Precisa de servidor HTTP — abrir os arquivos por `file://` não carrega as
imagens dos espaços de foto.
