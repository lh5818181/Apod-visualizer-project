# Visão Cósmica Sonora: Uma Jornada Estelar e Sonora

Um aplicativo web interativo que eleva a experiência de explorar o universo, combinando a beleza da astronomia com uma trilha sonora harmoniosa. Utilizando as APIs da NASA e do Spotify, a aplicação busca a "Astronomy Picture of the Day" (APOD) e sugere músicas que se alinham com o tema da imagem, criando uma **experiência imersiva, visualmente deslumbrante e sonoramente envolvente**.

Este projeto foi meticulosamente reestruturado com a metodologia **Atomic Design** para garantir escalabilidade, manutenibilidade e uma arquitetura de componentes robusta. As melhorias de **UI/UX** focam em um design moderno, responsivo e dinâmico, com animações fluidas e uma estética futurista que convida à exploração.

## ✨ Destaques e Funcionalidades

- **Imagem do Dia da NASA (APOD)**: Exibe a foto ou vídeo astronômico do dia com seu título, data, explicação detalhada e créditos.
- **Navegação por Data Aprimorada**: Permite explorar o arquivo APOD usando um seletor de data intuitivo, com validação para garantir a seleção de datas válidas.
- **Trilha Sonora Cósmica (Spotify Integration)**: Busca e exibe músicas relacionadas ao título da imagem APOD, proporcionando uma experiência auditiva que complementa a visual.
- **Design e UX de Ponta**:
    - **Atomic Design**: Arquitetura de componentes modular e escalável, facilitando o desenvolvimento e a manutenção.
    - **Estética Futurista**: Layout responsivo e centralizado com um tema escuro profundo, gradientes sutis e efeitos de *glassmorphism*.
    - **Animações Fluidas**: Transições e micro-interações animadas com Framer Motion, criando uma navegação dinâmica e envolvente.
    - **Loaders Personalizados**: Indicadores de carregamento animados para uma percepção de tempo de espera otimizada.
    - **Responsividade Total**: Experiência otimizada em desktops, tablets e dispositivos móveis.
- **Favoritos (Em Desenvolvimento)**: Funcionalidade planejada para permitir que o usuário salve suas imagens APOD favoritas em uma galeria pessoal.
- **Direitos Autorais**: Exibição clara dos créditos das imagens, conforme a política de uso da API da NASA.

## 📋 Índice

* [Instalação](#instalação)
* [Funcionalidades Implementadas](#funcionalidades-implementadas)
* [Arquitetura Atomic Design](#arquitetura-atomic-design)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Como Rodar o Projeto Localmente](#como-rodar-o-projeto-localmente)
* [Autor](#autor)

---

## 🛠 Instalação

### Pré-requisitos

*   Node.js (versão 18 ou superior)
*   npm ou Yarn

### Passos de Instalação

1.  **Clone o repositório**:
    ```bash
    git clone https://github.com/lh5818181/Apod-visualizer-project.git
    cd Apod-visualizer-project
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    # ou yarn install
    ```

3.  **Configure as chaves de API**:
    *   Obtenha sua chave da **NASA API** [aqui](https://api.nasa.gov/).
    *   Para a **Spotify API**, você precisará criar um aplicativo de desenvolvedor no [Spotify for Developers](https://developer.spotify.com/dashboard/). Obtenha seu `Client ID` e `Client Secret`.
    *   Crie um arquivo `.env` na raiz do projeto.
    *   Adicione suas chaves de API nele:
        ```env
        VITE_NASA_API_KEY=SUA_CHAVE_NASA_AQUI
        VITE_SPOTIFY_CLIENT_ID=SEU_CLIENT_ID_SPOTIFY_AQUI
        VITE_SPOTIFY_CLIENT_SECRET=SEU_CLIENT_SECRET_SPOTIFY_AQUI
        ```

4.  **Inicie a aplicação**:
    ```bash
    npm run dev
    # ou yarn dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

## 🚀 Funcionalidades Implementadas

Atualmente, o projeto possui as seguintes funcionalidades completas:

*   Exibição da Imagem Astronômica do Dia (APOD) ou vídeo.
*   Navegação por data com seletor intuitivo.
*   Busca e exibição de músicas relacionadas via Spotify API.
*   Design responsivo e animações fluidas para uma UX aprimorada.
*   Arquitetura de componentes baseada em Atomic Design.

---

## ⚛️ Arquitetura Atomic Design

O projeto foi reestruturado seguindo a metodologia Atomic Design, organizando os componentes em uma hierarquia clara e reutilizável:

*   **Átomos**: Elementos básicos da UI (ex: `ApodImage`, `ApodTitle`, `DatePickerInput`, `FavoritesButton`, `Loader`).
*   **Moléculas**: Grupos de átomos que funcionam como uma unidade (ex: `DatePicker`, `TrackItem`).
*   **Organismos**: Combinações de moléculas e/ou átomos que formam seções complexas da interface (ex: `ApodDisplay`, `MusicPlayerSection`).
*   **Templates**: Layouts de página que organizam organismos, focando na estrutura (ex: `HomePageTemplate`).
*   **Páginas**: Instâncias dos templates preenchidas com conteúdo real, representando o estado final da UI (ex: `HomePage`).

Esta abordagem garante maior modularidade, facilidade de manutenção e consistência visual em todo o projeto.

## ⚙️ Tecnologias Utilizadas

*   **React**: Biblioteca para construção da interface de usuário.
*   **TypeScript**: Adiciona tipagem estática e melhora a robustez do código.
*   **Vite**: Ferramenta de build rápida para ambiente de desenvolvimento.
*   **Styled Components**: Para estilização de componentes com CSS-in-JS.
*   **Framer Motion**: Biblioteca para animações e transições fluidas.
*   **Axios**: Cliente HTTP para requisições a APIs.
*   **Lodash (debounce)**: Para otimização de chamadas de API.
*   **Atomic Design**: Metodologia para organização e estruturação de componentes.

---

## 🧑‍💻 Autor

Luis Henrique Vieira de Oliveira

