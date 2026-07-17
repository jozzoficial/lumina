---
name: Lumina
colors:
  surface: '#FFFFFF'
  surface-dim: '#d9d9e5'
  surface-bright: '#faf8ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f3f3fe'
  surface-container: '#ededf9'
  surface-container-high: '#e7e7f3'
  surface-container-highest: '#e1e2ed'
  on-surface: '#191b23'
  on-surface-variant: '#434655'
  inverse-surface: '#2e3039'
  inverse-on-surface: '#f0f0fb'
  outline: '#737686'
  outline-variant: '#c3c6d7'
  surface-tint: '#0053db'
  primary: '#004ac6'
  on-primary: '#ffffff'
  primary-container: '#2563eb'
  on-primary-container: '#eeefff'
  inverse-primary: '#b4c5ff'
  secondary: '#006591'
  on-secondary: '#ffffff'
  secondary-container: '#39b8fd'
  on-secondary-container: '#004666'
  tertiary: '#943700'
  on-tertiary: '#ffffff'
  tertiary-container: '#bc4800'
  on-tertiary-container: '#ffede6'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dbe1ff'
  primary-fixed-dim: '#b4c5ff'
  on-primary-fixed: '#00174b'
  on-primary-fixed-variant: '#003ea8'
  secondary-fixed: '#c9e6ff'
  secondary-fixed-dim: '#89ceff'
  on-secondary-fixed: '#001e2f'
  on-secondary-fixed-variant: '#004c6e'
  tertiary-fixed: '#ffdbcd'
  tertiary-fixed-dim: '#ffb596'
  on-tertiary-fixed: '#360f00'
  on-tertiary-fixed-variant: '#7d2d00'
  background: '#F8FAFC'
  on-background: '#191b23'
  surface-variant: '#e1e2ed'
  emergency: '#EF4444'
  emergency-soft: '#FEF2F2'
  text-primary: '#0F172A'
  text-secondary: '#64748B'
  border: '#E2E8F0'
typography:
  h1:
    fontFamily: Plus Jakarta Sans
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  h1-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  h2:
    fontFamily: Plus Jakarta Sans
    fontSize: 36px
    fontWeight: '600'
    lineHeight: '1.3'
  h3:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.4'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.01em
  caption:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  section-v: 80px
  gutter: 24px
  container-max: 1200px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 32px
---

## Marca e Estilo
O sistema de design foi concebido para transmitir segurança, calor maternal e fiabilidade tecnológica para as mães em Angola. A personalidade da marca é acolhedora e profissional, equilibrando a seriedade dos cuidados de saúde com a suavidade necessária no contexto da maternidade.

O estilo visual segue o **Modernismo Corporativo com toques de Soft-Minimalism**. A interface utiliza espaços generosos (80px de margem vertical) para reduzir a carga cognitiva, garantindo que a informação crítica seja facilmente digerível. O uso de camadas translúcidas e sombras suaves cria uma hierarquia clara sem parecer agressiva, evocando uma sensação de ordem e paz.

## Cores
A paleta é centrada em tons de azul para evocar confiança médica e serenidade.
- **Primária (Azul Real):** Utilizada para ações principais, logótipos e elementos que exigem máxima confiança.
- **Secundária (Azul Céu):** Aplicada em gradientes e acentos para suavizar a interface e trazer clareza.
- **Emergência (Coral):** Reservada estritamente para alertas críticos e funções de SOS, garantindo contraste imediato sobre o fundo neutro.
- **Neutros:** O uso de Slate Gray para o texto garante legibilidade superior, enquanto o fundo "Soft Slate" reduz o cansaço visual em comparação com o branco puro.

## Tipografia
A tipografia prioriza a clareza e a modernidade.
- **Títulos:** Plus Jakarta Sans é utilizada com pesos Semi-Bold a Bold e tracking ajustado (tight) para uma presença forte e contemporânea.
- **Corpo de Texto:** Inter é aplicada para garantir máxima legibilidade em dispositivos móveis, com uma altura de linha generosa (1.6) para facilitar a leitura prolongada de guias e artigos de saúde.
- **Contexto Angolano:** A linguagem deve ser clara, utilizando termos locais quando apropriado, mantendo sempre um tom de respeito e apoio.

## Layout e Espaçamento
Este sistema utiliza uma **Grelha Fluida de 12 colunas** para desktop e uma grelha de **4 colunas para mobile**, com foco em margens verticais generosas de 80px para separar secções principais.

- **Desktop:** Margens laterais seguras de 10% a 15% para manter o conteúdo centralizado e focado.
- **Mobile:** Margens de 20px com foco em empilhamento vertical simples.
- **Ritmo:** O espaçamento segue uma escala baseada em 8px para manter a harmonia visual em botões e pequenos componentes.

## Elevação e Profundidade
A hierarquia visual é construída através de **Camadas Tonais e Sombras de Ambiente**.

- **Superfícies:** Os cartões utilizam fundos brancos puros sobre o fundo Slate suave, criando uma separação natural.
- **Sombras:** Devem ser extremamente difusas e sutis (Blur alto, opacidade baixa ~5-10%), simulando uma profundidade natural.
- **Glassmorphism:** O cabeçalho utiliza um efeito de desfoque de fundo (backdrop blur) com uma borda inferior mínima de 1px (#E2E8F0) para manter a orientação do utilizador durante o scroll sem bloquear a visão do conteúdo.

## Formas
As formas são predominantemente arredondadas para evocar a natureza "orgânica" e gentil da maternidade. 
- **Botões e Badges:** Utilizam cantos totalmente arredondados (pill-shaped) para transmitir amigabilidade.
- **Cartões e Inputs:** Seguem o padrão `rounded-lg` (16px no desktop) para um equilíbrio entre estrutura moderna e suavidade.

## Componentes

### Botões
- **Primário:** Gradiente de Royal Blue (#2563EB) para Sky Blue (#0EA5E9). Cantos arredondados (full), texto branco. Inclui uma sombra suave com a cor do tema para efeito de "brilho".
- **Secundário/Contorno:** Borda de 1.5px em Slate-900, fundo transparente. No hover, preenchimento total em Slate-900 com texto branco.

### Cartões de Funcionalidades
- Fundo branco, borda fina em `#E2E8F0`.
- Ícones dentro de caixas coloridas com 10% de opacidade da cor principal do ícone.
- Efeito de elevação (hover lift) de 4px no eixo Y ao passar o rato.

### Campos de Entrada (Inputs)
- Fundo branco com borda `#E2E8F0`. No estado de foco, a borda muda para Royal Blue com um anel de foco suave (glow).

### Badges (Micro-Tags)
- Cantos totalmente arredondados, fundo com 10% de opacidade da cor do texto. Ex: Tag "Mães Angolanas" usa texto Blue-600 com fundo Blue-50.

### Alertas SOS
- Devem ocupar a largura total do ecrã ou ser apresentados em cartões de alto contraste com fundo `#FEF2F2` e ícones em vermelho vibrante.