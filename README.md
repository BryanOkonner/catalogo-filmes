Catálogo de Filmes

Projeto desenvolvido para a disciplina de Desenvolvimento Mobile Híbrido.

O aplicativo tem como objetivo mostrar um catálogo de filmes. Na tela inicial são exibidos os filmes com seus respectivos pôsteres e títulos. Ao clicar em um filme, o usuário pode acessar uma tela com mais informações sobre ele.

Tecnologias utilizadas

 React Native
 Expo
 TypeScript
 Expo Router
 Axios
 API OMDb

Como executar o projeto

Primeiro, instale as dependências:

```bash
npm install
```

Depois, inicie o projeto:

```bash
npx expo start
```

O aplicativo pode ser aberto pelo Expo Go ou em um emulador Android.

API

Para buscar os filmes, foi utilizada a API do OMDb.

A chave da API fica armazenada em uma variável de ambiente no arquivo `.env`:

```env
EXPO_PUBLIC_OMDB_API_KEY=SUA_CHAVE
```

Funcionamento

A tela inicial busca os filmes pela API e mostra uma lista com pôster e título.

Ao selecionar um filme, o aplicativo envia o ID do filme para a tela de detalhes. Nessa tela é feita uma nova consulta à API para buscar informações mais completas sobre o filme.

Organização

O projeto possui:

 `app`: telas do aplicativo;
 `components`: componentes reutilizáveis;
 `services`: comunicação com a API;
 `assets`: imagens e outros arquivos utilizados pelo projeto.

Projeto

Este projeto foi desenvolvido como atividade acadêmica.
