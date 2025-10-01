# Planejamento da Arquitetura Atomic Design para o Projeto APOD

Este documento detalha a aplicação da metodologia Atomic Design para reestruturar e organizar os componentes do projeto APOD, visando melhorar a manutenibilidade, escalabilidade e a experiência do desenvolvedor.

## 1. Átomos (Atoms)

Os átomos são os blocos de construção fundamentais da interface. São elementos HTML básicos ou seus equivalentes estilizados que não podem ser quebrados sem perder sua funcionalidade essencial.

*   **`ApodImage`**: Componente de imagem para exibir a imagem do APOD.
*   **`ApodTitle`**: Componente de título para o nome da imagem/vídeo do APOD.
*   **`ApodExplanation`**: Componente de parágrafo para a explicação do APOD.
*   **`CopyrightText`**: Componente de texto para informações de copyright.
*   **`DatePickerInput`**: Campo de entrada de data (`<input type="date">`).
*   **`MusicTitle`**: Título para a seção de músicas.
*   **`TrackName`**: Nome da faixa de música.
*   **`ArtistName`**: Nome do artista da música.
*   **`AlbumArt`**: Imagem da capa do álbum.
*   **`FavoritesButton`**: Botão para adicionar aos favoritos.
*   **`Loader`**: Indicador de carregamento.
*   **`ApodVideoWrapper`**: Wrapper para o iframe de vídeo.

## 2. Moléculas (Molecules)

Moléculas são grupos de átomos unidos para formar unidades funcionais. Elas são mais complexas que os átomos, mas ainda focadas em uma única função.

*   **`DatePicker`**: Combinação de `DatePickerInput` para seleção de datas.
*   **`TrackItem`**: Combinação de `AlbumArt`, `TrackName` e `ArtistName` para exibir uma única faixa de música.
*   **`MusicTrackList`**: Uma lista de `TrackItem`s.

## 3. Organismos (Organisms)

Organismos são grupos de moléculas e/ou átomos que formam seções distintas e complexas da interface. Eles representam componentes de UI mais substanciais.

*   **`ApodDisplay`**: Combina `ApodImage` (ou `ApodVideoWrapper`), `ApodTitle`, `ApodExplanation`, `CopyrightText` e `DatePicker` para exibir a imagem/vídeo do dia e sua descrição.
*   **`MusicPlayerSection`**: Combina `MusicTitle` e `MusicTrackList` para exibir a lista de músicas relacionadas.

## 4. Templates (Templates)

Templates são layouts de página que organizam organismos em uma estrutura. Eles se concentram na disposição do conteúdo, sem se preocupar com o conteúdo final.

*   **`HomePageTemplate`**: Estrutura da página inicial que inclui o `ApodDisplay` e o `MusicPlayerSection`.

## 5. Páginas (Pages)

Páginas são instâncias específicas dos templates, preenchidas com conteúdo real. Elas representam o estado final da interface que o usuário vê.

*   **`HomePage`**: A página inicial do aplicativo, que utiliza o `HomePageTemplate` e carrega os dados reais do APOD e das músicas.
