# Styleguide — Aplicação Franciscanos

## 1) Pesquisa de referência visual franciscana

Este styleguide foi construído a partir de símbolos e elementos visuais recorrentes na espiritualidade franciscana:

- **Tons terrosos (marrom e areia):** remetem ao hábito simples, pobreza evangélica e humildade.
- **Verde oliva suave:** lembra cuidado com a criação e ecologia integral.
- **Dourado discreto:** reforça luz, esperança e celebração sem ostentação.
- **Formas orgânicas e cantos arredondados:** transmitem acolhimento e fraternidade.
- **Tipografia clássica + tipografia funcional:** união de tradição espiritual e uso digital contemporâneo.

> Princípio central: **sobriedade acolhedora**. A interface deve parecer humana, simples e contemplativa.

---

## 2) Paleta de cores oficial

| Token | Cor | Uso |
|---|---|---|
| `--color-bg` | `#F8F3EB` | fundo geral |
| `--color-surface` | `#FFFDF8` | cartões e superfícies |
| `--color-surface-muted` | `#EFE3D0` | badges e destaques suaves |
| `--color-primary` | `#6F4E37` | botões ativos e identidade principal |
| `--color-primary-strong` | `#5A3D2A` | títulos e ênfases |
| `--color-secondary` | `#7F8A62` | acentos complementares |
| `--color-tertiary` | `#C6A978` | detalhes celebrativos |
| `--color-text` | `#2B241F` | texto principal |
| `--color-text-soft` | `#65574D` | texto secundário |
| `--color-border` | `#D8C6AD` | bordas e divisores |

### Regras de aplicação
- Priorizar contraste alto para leitura em ambientes externos.
- Evitar preto puro (`#000`) e branco puro (`#FFF`) quando possível; preferir tons quentes.
- Evitar saturação intensa que descaracterize sobriedade franciscana.

---

## 3) Tipografia

- **Títulos:** `Marcellus, serif`
  - Remete a textos clássicos e contemplativos.
- **Corpo e UI:** `Inter, system-ui, sans-serif`
  - Alta legibilidade para dispositivos móveis.

### Escala sugerida
- `h1`: `1.6rem` a `2.1rem` (responsivo)
- `h2`: `1.35rem`
- Corpo: `0.94rem` a `1rem`
- Microtexto: `0.72rem` a `0.8rem`

---

## 4) Componentes base

### 4.1 Header espiritual
- Gradiente marrom (`--color-primary` → `--color-primary-strong`).
- Kicker institucional + título + subtítulo pastoral.

### 4.2 Menu principal
- Mobile-first em grade 2x2.
- Desktop em 4 colunas.
- Estado ativo com fundo `--color-primary` e texto claro.

### 4.3 Cards de conteúdo
- Borda suave `--color-border`.
- Raio médio (`12px`) para acolhimento visual.
- Badge para formato/tipo de item.

### 4.4 Card de perfil/fraternidade
- Estrutura em lista de definições (`dl`).
- Coluna esquerda para rótulos e direita para valores.

---

## 5) Diretrizes de UX

- **Mobile first:** iniciar design para largura ~360px.
- **Toque confortável:** altura mínima de alvo: `44px`.
- **Linguagem fraterna:** microtextos acolhedores e pastorais.
- **Estados vazios e erro:** sempre orientar próximo passo com serenidade.
- **Arquitetura para API:** dados desacoplados em camada de serviço.

---

## 6) Arquitetura recomendada para integração futura

- `src/api/client.js`: camada HTTP comum (`apiRequest`).
- `src/api/franciscanosService.js`: serviços por domínio (`getSongs`, `getProfile`, etc).
- `src/data/mockData.js`: dados de desenvolvimento.
- `USE_MOCK_DATA`: chave de transição para backend real.

Quando a API estiver pronta:
1. Alterar `USE_MOCK_DATA` para `false`.
2. Configurar `API_BASE_URL` via variável de ambiente.
3. Tratar autenticação (token/JWT) no `apiRequest`.
4. Adicionar loading states e cache local.
