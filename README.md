# Visão Cósmica Sonora

Um aplicativo web interativo que combina a beleza da astronomia com o mundo da música. Utilizando as APIs da NASA e do Spotify, a aplicação busca a "Astronomy Picture of the Day" (APOD) e sugere uma trilha sonora que se harmonize com a imagem, criando uma experiência imersiva e visualmente deslumbrante.

Este projeto foi desenvolvido como um estudo de caso para aprimorar minhas habilidades em consumo de APIs, otimização de UI/UX e animações fluidas, solidificando meu conhecimento em React, TypeScript e Design System moderno.

## 🚀 Características Principais

- **Imagem do Dia da NASA (APOD)**: Exibe a foto astronômica do dia com seu título, data e descrição detalhada.
- **Navegação por Data**: Permite explorar fotos de dias anteriores usando um seletor de data intuitivo, com botões de **"Anterior"** e **"Próximo"** para navegação rápida.
- **Favoritos**: O usuário pode **salvar imagens favoritas** em uma galeria pessoal, com os dados persistidos via `localStorage`.
- **"Minha Foto de Aniversário"**: Funcionalidade para visualizar a foto APOD de uma data de aniversário específica, tornando a experiência mais pessoal.
- **Design e UX Aprimorados**:
    - Layout responsivo e centralizado para experiência otimizada em qualquer dispositivo.
    - Efeito Glassmorphism para um visual futurista e translúcido.
    - Animações de entrada com Framer Motion para navegação dinâmica.
    - Loader personalizado com animação para melhorar a percepção de tempo de carregamento.
- **Direitos Autorais**: Exibição dos créditos das imagens, conforme a política de uso da API da NASA.

## 📋 Índice

* [Instalação](#instalação)
* [Funcionalidades Implementadas](#funcionalidades-implementadas)
* [Tecnologias Utilizadas](#tecnologias-utilizadas)
* [Como Rodar o Projeto Localmente](#como-rodar-o-projeto-localmente)
* [Autor](#autor)

---

## 🛠 Instalação

### Pré-requisitos

* Node.js (versão 18 ou superior)
* npm

### Passos de Instalação

1.  **Clone o repositório**:
    ```bash
    git clone [https://github.com/lh5818181/Apod-visualizer-project.git](https://github.com/lh5818181/Apod-visualizer-project.git)
    cd Apod-visualizer-project
    ```

2.  **Instale as dependências**:
    ```bash
    npm install
    ```

3.  **Configure as chaves de API**:
    * Obtenha sua chave da **NASA API** [aqui](https://api.nasa.gov/).
    * Crie um arquivo `.env` na raiz do projeto.
    * Adicione sua chave de API nele:
        ```env
        VITE_NASA_API_KEY=SUA_CHAVE_AQUI
        ```
    * *(Nota: A API do Spotify ainda não está integrada, mas este é o lugar para sua futura configuração.)*

4.  **Inicie a aplicação**:
    ```bash
    npm run dev
    ```
    A aplicação estará disponível em `http://localhost:5173`.

---

## 🚀 Funcionalidades Implementadas

Atualmente, o projeto possui as seguintes funcionalidades completas:

* Exibição da Imagem Astronômica do Dia (APOD).
* Navegação por data.
* Botões de navegação **"Anterior"** e **"Próximo"**.
* Funcionalidade de **"Favoritar"** imagens e salvá-las no `localStorage`.
* Funcionalidade **"Minha Foto de Aniversário"** para personalização da experiência.
* Exibição de música de forma estática (futura integração com a API do Spotify).

---

## ⚙️ Tecnologias Utilizadas

* **React**: Biblioteca para construção da interface de usuário.
* **TypeScript**: Adiciona tipagem estática.
* **Vite**: Ferramenta de build para ambiente de desenvolvimento rápido.
* **Styled Components**: Para escrever CSS-in-JS.
* **Framer Motion**: Biblioteca para animações.
* **Axios**: Cliente HTTP para requisições a APIs.
* **react-spinners**: Para componentes de carregamento.
* **dayjs**: Para manipulação de datas.

---

## 🧑‍💻 Autor

Luis Henrique Vieira de Oliveira