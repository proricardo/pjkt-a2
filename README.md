# Projekt — Site Institucional

Site institucional premium para a **Projekt**, empresa de consultoria em Tecnologia e Inteligência Artificial, sediada em Curitiba/PR.

---

## Stack

| Camada | Tecnologia |
|---|---|
| Framework | [Astro 4](https://astro.build) (static output) |
| Estilos | [Tailwind CSS 3](https://tailwindcss.com) + CSS custom properties |
| Tipografia | Syne, Inter, JetBrains Mono (Google Fonts) |
| Formulário | [Formspree](https://formspree.io) (com fallback mailto) |
| Hospedagem | GitHub Pages + domínio customizado |
| CI/CD | GitHub Actions |
| SEO | Astro Sitemap + meta/OG/Twitter + Schema.org |

---

## Estrutura do Projeto

```
projekt-site/
├── .github/
│   └── workflows/
│       └── deploy.yml          # CI/CD para GitHub Pages
├── public/
│   ├── CNAME                   # Domínio customizado
│   ├── robots.txt
│   ├── favicon.svg
│   └── images/                 # SVGs e assets estáticos
├── src/
│   ├── components/             # Componentes Astro reutilizáveis
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── ServicesSection.astro
│   │   ├── ValueSection.astro
│   │   ├── MethodologyPreview.astro
│   │   ├── CasesSection.astro
│   │   ├── TestimonialsSection.astro
│   │   ├── TechStack.astro
│   │   ├── InsightsPreview.astro
│   │   ├── ContactSection.astro
│   │   ├── CTAStrip.astro
│   │   ├── ThemeToggle.astro
│   │   ├── CookieBanner.astro
│   │   └── Breadcrumb.astro
│   ├── content/
│   │   ├── config.ts           # Schema da content collection
│   │   └── insights/           # Posts do blog (Markdown)
│   ├── layouts/
│   │   ├── Layout.astro        # Layout base (meta, OG, schema)
│   │   └── BlogLayout.astro    # Layout de post individual
│   ├── pages/
│   │   ├── index.astro         # Home
│   │   ├── servicos.astro
│   │   ├── cases.astro
│   │   ├── metodologia.astro
│   │   ├── sobre.astro
│   │   ├── contato.astro
│   │   ├── privacidade.astro
│   │   ├── cookies.astro
│   │   ├── 404.astro
│   │   └── insights/
│   │       ├── index.astro     # Listagem de insights
│   │       └── [slug].astro    # Post individual
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
└── package.json
```

---

## Como Rodar Localmente

### Pré-requisitos
- Node.js 18+
- npm 9+

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU-USUARIO/SEU-REPO.git
cd SEU-REPO

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O site estará disponível em `http://localhost:4321`.

### Variáveis de ambiente (local)

Crie um arquivo `.env` na raiz (não commitar):

```env
PUBLIC_FORMSPREE_ENDPOINT=https://formspree.io/f/SEU_ID_AQUI
```

Se a variável não estiver definida, o formulário usa fallback para `mailto:contato@projekt.com.br`.

---

## Como Buildar

```bash
# Build de produção (gera /dist)
npm run build

# Preview do build localmente
npm run preview
```

O build gera uma pasta `/dist` com o site estático completo.

---

## Como Publicar no GitHub Pages

### 1. Configure o repositório

1. Vá em **Settings → Pages** do seu repositório no GitHub
2. Em **Source**, selecione **"GitHub Actions"**

### 2. Configure o Secret do Formspree (opcional)

1. Vá em **Settings → Secrets and variables → Actions**
2. Clique em **"New repository secret"**
3. Nome: `FORMSPREE_ENDPOINT`
4. Valor: sua URL do Formspree (ex.: `https://formspree.io/f/xxxxxxxx`)

> Se o secret não for configurado, o formulário exibirá um link de fallback para `mailto:`.

### 3. Faça push para a branch `main`

```bash
git add .
git commit -m "feat: deploy inicial"
git push origin main
```

O workflow em `.github/workflows/deploy.yml` será executado automaticamente:
- **build**: instala dependências e roda `astro build`
- **deploy**: publica a pasta `dist/` no GitHub Pages

Acompanhe em **Actions** no GitHub.

---

## Configurar Domínio Customizado

### 1. CNAME (já incluído)

O arquivo `public/CNAME` já contém `projekt.com.br`. Se quiser mudar o domínio, edite esse arquivo.

### 2. DNS — Apex domain (`projekt.com.br`)

No painel do seu registrador (ex.: Registro.br, Cloudflare), configure os seguintes registros **A**:

```
Type  Host  Value
A     @     185.199.108.153
A     @     185.199.109.153
A     @     185.199.110.153
A     @     185.199.111.153
```

### 3. DNS — Subdomínio `www`

Configure um registro **CNAME**:

```
Type   Host  Value
CNAME  www   SEU-USUARIO.github.io
```

### 4. HTTPS

Após a propagação do DNS (pode levar até 24h):

1. Vá em **Settings → Pages**
2. Confirme que o domínio está verificado
3. Marque **"Enforce HTTPS"**

O GitHub Pages provisionará o certificado TLS via Let's Encrypt automaticamente.

---

## Gerenciamento de Conteúdo

### Adicionar um post no blog

1. Crie um arquivo `.md` em `src/content/insights/`:

```markdown
---
title: "Título do Post"
description: "Descrição curta para SEO e listagens (max 160 chars)."
pubDate: 2025-01-15
category: "Inteligência Artificial"
readTime: "5 min de leitura"
tags: ["IA", "Produto"]
featured: false
author: "Nome do Autor"
---

Conteúdo em Markdown aqui...
```

2. O slug da URL será gerado automaticamente a partir do nome do arquivo (ex.: `meu-post.md` → `/insights/meu-post`)
3. O sitemap é gerado automaticamente no build

### Atualizar informações de contato/empresa

- WhatsApp: edite o número nos componentes `Hero.astro`, `ContactSection.astro`, `Footer.astro` e `CTAStrip.astro`
- Email: edite `contato@projekt.com.br` nos mesmos arquivos + `Layout.astro`
- LinkedIn/redes: edite `Footer.astro`

### Preencher dados do fundador

Em `src/pages/sobre.astro`, procure por `[PREENCHER` e substitua pelas informações reais.

### Substituir cases ilustrativos

Em `src/pages/cases.astro` e `src/components/CasesSection.astro`, os cases são marcados como exemplos. Substitua pelo conteúdo real quando disponível.

---

## Sistema de Design

### Paleta (CSS Custom Properties)

| Variável | Light | Dark |
|---|---|---|
| `--bg` | `#F9F8F5` | `#09090B` |
| `--bg-alt` | `#F0EDE8` | `#111113` |
| `--surface` | `#FFFFFF` | `#18181B` |
| `--border` | `#E8E3DC` | `#27272A` |
| `--text` | `#0D0C0A` | `#FAFAF9` |
| `--text-muted` | `#6B6560` | `#A1A1AA` |
| `--accent` | `#6D28D9` | `#8B5CF6` |
| `--accent-2` | `#0284C7` | `#38BDF8` |
| `--accent-neon` | `#00E87A` | `#00FF87` |

### Dark Mode

Controlado via `data-theme="dark"` no `<html>`. Persistido em `localStorage`. Respeita `prefers-color-scheme` na primeira visita.

Toggle via componente `ThemeToggle.astro` no header.

### Fontes

- **Display/Headings**: Syne (pesos: 400, 600, 700, 800)
- **Body**: Inter (pesos: 300, 400, 500, 600)
- **Monospace**: JetBrains Mono (pesos: 400, 500)

---

## Variáveis de Ambiente

| Variável | Obrigatória | Descrição |
|---|---|---|
| `PUBLIC_FORMSPREE_ENDPOINT` | Não | URL completa do endpoint Formspree. Se ausente, o form usa fallback mailto. |

> Prefixo `PUBLIC_` expõe a variável ao cliente em Astro. Não coloque dados sensíveis com esse prefixo.

---

## SEO e Performance

- **Sitemap**: gerado automaticamente por `@astrojs/sitemap` em `/sitemap-index.xml`
- **robots.txt**: em `/public/robots.txt`
- **Meta tags**: por página (title, description, canonical, OG, Twitter Card)
- **Schema.org**: Organization em todas as páginas, LocalBusiness em `/contato`, Article em posts
- **Lighthouse (alvo)**: 90+ em Performance, SEO, Best Practices e Accessibility

Para otimização adicional de imagens, considere adicionar `@astrojs/image` e converter os SVGs de case para WebP/AVIF.

---

## LGPD

- `/privacidade` — Política de Privacidade
- `/cookies` — Política de Cookies
- Banner de consentimento de cookies (`CookieBanner.astro`) — não carrega trackers antes do consentimento

---

## Licença

MIT — veja [LICENSE](LICENSE) para detalhes.

---

*Desenvolvido com Astro 4 + Tailwind CSS. Hospedado no GitHub Pages.*
