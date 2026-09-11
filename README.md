Catálogo de Filmes

Projeto desenvolvido para a disciplina de Desenvolvimento Mobile Híbrido.

O aplicativo tem como objetivo mostrar um catálogo de filmes. Na tela inicial são exibidos os filmes com seus respectivos pôsteres e títulos. Ao clicar em um filme, o usuário pode acessar uma tela com mais informações sobre ele.

Integrantes

 FELIPE LOUREIRO SOUZA (MUDOU DE GRUPO APOS ESSA ETAPA)
 
 EDUARDO SILVA BRANDAO FILHO
 
 FILLIPE BRYAN SANTOS DO COUTO REIS

Tecnologias utilizadas

 React Native
 Expo
 TypeScript
 Expo Router
 Axios
 API OMDb
 Expo Vector Icons

Como executar o projeto

Primeiro, instale as dependências:

npm install

Depois, inicie o projeto:

npx expo start

O aplicativo pode ser aberto pelo Expo Go ou em um emulador Android.

API

Para buscar os filmes, foi utilizada a API do OMDb.

A chave da API fica armazenada em uma variável de ambiente no arquivo .env:

EXPO_PUBLIC_OMDB_API_KEY=SUA_CHAVE

O arquivo .env não deve ser enviado para o GitHub, pois contém a chave utilizada para acessar a API.

Funcionamento

A tela inicial busca os filmes pela API e mostra uma lista com pôster e título.

Ao selecionar um filme, o aplicativo envia o ID do filme para a tela de detalhes através do Expo Router.

A tela de detalhes recebe esse ID e faz uma nova consulta à API para buscar informações mais completas sobre o filme, como ano, gênero, diretor, atores, duração, nota do IMDb e sinopse.

Arquitetura

O projeto foi separado em telas, componentes e serviços para facilitar a organização e manutenção do código.

 app: contém as telas do aplicativo;
 components: contém componentes reutilizáveis, como o MovieCard;
 services: contém a comunicação com a API, incluindo o arquivo movieService.ts;
 assets: contém imagens e outros arquivos utilizados pelo projeto.

A comunicação com a API foi centralizada no arquivo movieService.ts. Dessa forma, as telas utilizam as funções desse serviço para buscar os dados dos filmes.

Estrutura do projeto

A estrutura principal do projeto é organizada da seguinte forma:

catalogo-filmes
src
app
index.tsx
details.tsx
_layout.tsx
components
MovieCard.tsx
services
movieService.ts
assets
.env
.gitignore
package.json
README.md

Controle de versão

O projeto utiliza Git e GitHub para controle de versão.

Arquivos e pastas como node_modules, .expo e .env não são enviados para o repositório. Esses arquivos estão configurados no .gitignore.

Projeto

Este projeto foi desenvolvido como atividade acadêmica para a disciplina de Desenvolvimento Mobile Híbrido.
