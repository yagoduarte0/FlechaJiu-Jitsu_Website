<div align="center">

# Flecha Jiu-Jitsu

**Site institucional da academia Flecha Jiu-Jitsu — Henderson, Nevada**

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=white)](https://react.dev)
[![Vite](https://img.shields.io/badge/Vite-5.4-646CFF?logo=vite&logoColor=white)](https://vite.dev)
[![Cloudflare Workers](https://img.shields.io/badge/Cloudflare-Workers-F38020?logo=cloudflare&logoColor=white)](https://workers.cloudflare.com)

[flechajiu-jitsu.com](https://flechajiu-jitsu.com)

</div>

---

## Sobre

Landing page de página única para a academia de Jiu-Jitsu brasileiro do Professor **Pedro "Flecha" Galvão**, faixa-preta 5º grau formado sob o Mestre Carlos Gracie Jr.

O site apresenta a academia, o professor, a grade de horários e os planos de treino, com o objetivo de converter visitantes em alunos através da aula experimental gratuita.

**Público-alvo:** moradores de Henderson e Las Vegas buscando Jiu-Jitsu para adultos e crianças (a partir de 4 anos).

### Seções

| Seção | Componente | Conteúdo |
|---|---|---|
| Hero | `Hero.jsx` | Chamada principal e CTA de aula grátis |
| Academy | `Academy.jsx` | Carrossel de fotos e estrutura da academia |
| What To Expect | `FirstClass.jsx` | Os 3 passos da primeira aula |
| Why Jiu-Jitsu | `Pillars.jsx` | Técnica, resiliência mental, para todos |
| Professor | `Professor.jsx` | Biografia do Pedro Galvão |
| Schedule | `Schedule.jsx` | Grade semanal de aulas |
| Pricing | `Pricing.jsx` | Planos mensais e pré-pagos |
| Contato | `Footer.jsx` | Endereço, telefone, e-mail, mapa |

---

## Stack

- **React 18** — componentes de UI, sem roteador (página única com âncoras)
- **Vite 5** — build e servidor de desenvolvimento
- **CSS puro** — um único `style.css`, sem framework nem pré-processador
- **Cloudflare Workers** — hospedagem de assets estáticos

Sem backend, sem banco de dados, sem dependências além de `react` e `react-dom`.

---

## Começando

**Pré-requisitos:** Node.js 20 ou superior (a versão fixada está em `.nvmrc`).

```bash
# instalar dependências
npm install

# rodar em desenvolvimento (http://localhost:5173)
npm run dev

# gerar o build de produção em dist/
npm run build

# pré-visualizar o build localmente
npm run preview
```

---

## Estrutura

```
├── index.html              # HTML raiz: meta tags, SEO, JSON-LD
├── wrangler.jsonc          # configuração de deploy (Cloudflare)
├── public/                 # arquivos copiados direto para o build
│   ├── robots.txt
│   ├── sitemap.xml
│   └── assets/             # logos e imagens
└── src/
    ├── main.jsx            # ponto de entrada do React
    ├── App.jsx             # monta as seções na ordem da página
    ├── style.css           # todo o estilo do site
    ├── components/         # uma seção da página por arquivo
    ├── data/               # ⭐ conteúdo editável (ver abaixo)
    └── hooks/
        └── useScrollReveal.js   # animação de entrada ao rolar
```

---

## Como editar o conteúdo

A parte mais importante deste README: **horários e preços ficam separados do código visual**, em `src/data/`. Para atualizá-los você não precisa mexer em nenhum componente.

### Horários das aulas — `src/data/schedule.js`

O array `SCHEDULE_ROWS` tem uma entrada por faixa de horário, e cada dia da semana é uma chave dessa entrada. Dias sem aula recebem `null`:

```js
export const SCHEDULE_ROWS = [
  {
    time: '7:00 – 8:00 PM',
    mon:   { category: 'adults', label: 'Adult BJJ', type: 'Gi',    level: 'Age 15+' },
    tues:  { category: 'adults', label: 'Adult BJJ', type: 'No Gi', level: 'Age 15+' },
    wed:   { category: 'adults', label: 'Adult BJJ', type: 'Gi',    level: 'Age 15+' },
    thurs: null,   // sem aula neste dia
    fri:   null,
    sat:   null,
  },
]
```

> ⚠️ Atenção às chaves: são `tues` e `thurs` (não `tue`/`thu`). A lista oficial está em `DAYS`, no fim do arquivo.

**Campos de cada aula:**

| Campo | Função |
|---|---|
| `category` | Define a cor do selo via CSS (`tag--adults`). Valores: `adults`, `juniors`, `kids`, `tiny` |
| `label` | Nome exibido no selo (ex.: `Adult BJJ`) |
| `type` | `Gi`, `No Gi` ou `Open Mat` |
| `level` | Texto abaixo do selo (ex.: `Age 7–10`, `All Levels`) |

Para remover uma aula, troque o objeto daquele dia por `null` — não apague a chave. A tabela se ajusta sozinha.

> ⚠️ **Ao mudar horários, atualize também o JSON-LD em `index.html`** (bloco `openingHoursSpecification`) e o Google Business Profile. Os três precisam bater — o Google compara.

### Planos e preços — `src/data/pricing.js`

```js
export const MONTHLY_PLANS = [
  { name: 'Single Student', price: 149, discount: null, featured: true },
  // featured: true  → destaca o plano visualmente
  // discount        → selo de desconto (ex.: '10% off')
]
```

### Matrícula, e-mail e waiver — `src/data/links.js`

Os CTAs da página saem todos daqui:

```js
export const ENROLL_URL = null   // link direto do formulário de cadastro (o mesmo do QR)
export const WAIVER_PDF = null   // ex.: '/assets/docs/flecha-waiver.pdf'
```

| O que | Para onde vai |
| --- | --- |
| **Free Trial / Reserve My First Class** (nav, hero, "What To Expect", preços) | `TRIAL_MAILTO` — abre o e-mail já com assunto e corpo preenchidos; a pessoa só completa nome, idade, aula, horário e telefone |
| **Enroll Now** (preços) e **Enroll** (nav) | rolam até o bloco do QR code no rodapé |
| **Waiver** (rodapé) | baixa o PDF de `WAIVER_PDF` |

- **QR code:** `public/assets/images/enroll-qr.png`. Para trocar, substitua o arquivo — o rodapé aponta para esse caminho fixo.
- **`ENROLL_URL`:** enquanto for `null`, o rodapé mostra só o QR. Ao preencher com a URL do formulário, aparece também um botão clicável, para quem está no computador e não consegue apontar a câmera.
- **`WAIVER_PDF`:** enquanto for `null`, o bloco do waiver não aparece no rodapé. Coloque o arquivo em `public/assets/docs/` e aponte o caminho aqui (sem o `public/`) para ativar o download.

Para mudar o texto do e-mail automático, edite `TRIAL_BODY` no mesmo arquivo.

### Dados de contato — `src/components/Footer.jsx`

Endereço, telefone, e-mail, Instagram e o mapa incorporado.

> ⚠️ Se mudar telefone ou endereço, atualize nos **quatro** lugares: `Footer.jsx`, o JSON-LD do `index.html`, o Google Business Profile e o Yelp. Divergência entre eles prejudica o ranqueamento local.

---

## Deploy

O deploy é **automático**. Todo push na branch `main` dispara:

```
git push  →  Cloudflare detecta  →  npm ci  →  npm run build  →  npx wrangler deploy
```

Não é necessário rodar `npm run build` antes de commitar — a pasta `dist/` é gerada pela Cloudflare e está no `.gitignore`. Você commita apenas o código-fonte.

A configuração fica em `wrangler.jsonc`: um Worker que serve os assets estáticos de `dist/`, sem código de servidor.

---

## SEO

O site já inclui:

- **JSON-LD** (`SportsActivityLocation`) em `index.html` com endereço, telefone, horários e fundador
- **`robots.txt`** e **`sitemap.xml`**
- **Open Graph** e **Twitter Card** para compartilhamento em redes sociais
- **URL canônica** e meta description

**Fonte única de verdade dos dados do negócio:**

| Dado | Valor oficial |
|---|---|
| Nome | Flecha Jiu-Jitsu |
| Endereço | 270 E Horizon Dr #103, Henderson, NV 89015 |
| Telefone | (702) 986-5618 |
| E-mail | support@flechabjj.com |

---

## Pendências

- [ ] Nova foto do professor — `public/assets/images/pedro-galvao-professor.jpeg`, retrato, mínimo 600×800. Com esse nome exato, porque o componente e o JSON-LD do `index.html` apontam para ele. Enquanto não existir, a seção "About" mostra o placeholder "Photo Coming Soon"
- [ ] PDF do termo de responsabilidade — colocar em `public/assets/docs/` e apontar em `WAIVER_PDF` (`src/data/links.js`)
- [ ] URL do formulário de cadastro — preencher `ENROLL_URL` em `src/data/links.js` para dar um botão clicável a quem está no computador
- [ ] Google Business Profile — criar e verificar
- [ ] Corrigir telefone e URL do site no Yelp e no Smoothcomp
- [ ] Analytics (Cloudflare Web Analytics)
- [ ] Formulário de captação de leads no próprio site — hoje a aula experimental sai por e-mail e a matrícula pelo QR code
- [ ] Avaliações do Google na página — depende do Google Business Profile existir primeiro

---

<div align="center">

270 E Horizon Dr #103, Henderson, NV 89015 · (702) 986-5618

[Instagram](https://instagram.com/flechajiujitsu) · [Site](https://flechajiu-jitsu.com)

</div>
