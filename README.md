# Site Vieira-Rodrigues Advocacia

Site institucional estático, versões PT e EN.

- `index.html` — versão em português
- `en.html` — versão em inglês
- `_ds/` — tokens, fontes e bundle do design system
- `uploads/`, `assets/` — fotografias e ilustração
- `support.js`, `image-slot.js` — runtime das páginas
- `.image-slots.state.json` — imagens dos espaços de foto (manter ao lado do HTML)
- `.nojekyll` — necessário no GitHub Pages para servir a pasta `_ds/`

## Publicar no GitHub Pages

1. Suba o conteúdo desta pasta na raiz do repositório (ou em `/docs`).
2. Settings → Pages → Branch: `main`, pasta `/` (ou `/docs`).
3. Precisa de servidor HTTP — abrir os arquivos por `file://` não carrega as imagens dos espaços.
