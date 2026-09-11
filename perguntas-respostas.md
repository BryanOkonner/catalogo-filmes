 Perguntas e respostas — Catálogo de Filmes

 1. Quais bibliotecas serão utilizadas para navegação, consumo da API e utilização de ícones?

Para o projeto, foi utilizado o Expo Router para fazer a navegação entre as telas do aplicativo. Para realizar as requisições para a API de filmes, foi utilizado o Axios. Para os ícones, foi utilizado o Expo Vector Icons, que possui ícones compatíveis com o React Native e com o Expo.

 2. Por que escolher essas bibliotecas em vez de alternativas?

Escolhemos essas bibliotecas porque elas funcionam bem com o Expo e com o React Native e são suficientes para as necessidades do projeto. O Expo Router facilita a navegação entre as telas, o Axios deixa mais simples fazer as requisições para a API e o Expo Vector Icons oferece vários ícones prontos para utilizar no aplicativo. Dessa forma, conseguimos desenvolver o projeto sem adicionar bibliotecas desnecessárias.

 3. Qual biblioteca precisa ser instalada com npx expo install em vez de npm install, e por quê?

As bibliotecas relacionadas ao Expo e ao React Native foram instaladas utilizando o comando npx expo install. No projeto, o Expo Router e o Expo Vector Icons foram instalados dessa forma. Isso é importante porque o comando verifica a versão do Expo SDK utilizada no projeto e procura instalar versões compatíveis. Já o Axios foi instalado com npm install, pois é uma biblioteca JavaScript que não depende diretamente da versão do Expo.

 4. As bibliotecas são mantidas e possuem documentação? Como isso foi verificado?

Sim. As bibliotecas utilizadas possuem documentação oficial e são utilizadas em projetos com React Native e Expo. Isso foi verificado consultando a documentação oficial do Expo, do React Native, do Axios e do Expo Router, além de verificar se os pacotes estavam disponíveis para instalação pelo npm.

 5. Quais são as limitações ou pontos de atenção dessas bibliotecas?

Um ponto de atenção é que as bibliotecas precisam ser compatíveis com a versão do Expo utilizada no projeto. Além disso, o Axios depende de uma conexão com a internet para conseguir buscar os dados da API. No caso do Expo Vector Icons, é necessário utilizar os ícones de acordo com a biblioteca instalada. Também é importante acompanhar a documentação caso alguma biblioteca receba atualizações que possam causar mudanças no projeto.

 6. Quais são as telas do aplicativo e o que cada uma exibe?

O aplicativo possui duas telas principais. A primeira é a tela inicial, que apresenta a lista de filmes obtidos pela API, mostrando o pôster e o título de cada filme. A segunda é a tela de detalhes, que é aberta quando o usuário seleciona um filme e apresenta informações mais completas, como ano, gênero, diretor, atores, duração, nota do IMDb e sinopse.

 7. Como funciona o fluxo de dados da lista para a tela de detalhes?

Primeiro, a tela inicial faz uma requisição para a API e recebe a lista de filmes. Cada filme possui um ID do IMDb. Quando o usuário clica em um filme, esse ID é enviado para a tela de detalhes através do Expo Router. A tela de detalhes recebe o ID e utiliza esse valor para fazer uma nova requisição à API do OMDb, buscando as informações completas daquele filme.

 8. Por que separar telas, componentes e serviços?

A separação foi feita para deixar o projeto mais organizado e facilitar a manutenção. As telas ficam responsáveis pela parte visual e pela interação com o usuário, os componentes podem ser reutilizados em diferentes partes do aplicativo e os serviços ficam responsáveis pela comunicação com a API. Dessa forma, cada parte do código possui uma função mais específica e fica mais fácil encontrar e alterar alguma parte do projeto.

 9. Quais componentes serão reutilizáveis?

O principal componente reutilizável do projeto é o MovieCard. Ele é responsável por apresentar o pôster e o título de cada filme e pode ser utilizado para vários filmes diferentes. As informações do filme são passadas para o componente, evitando a necessidade de criar o mesmo código várias vezes.

 10. Onde fica centralizada a comunicação com a API e por quê?

A busca da lista de filmes fica centralizada no arquivo movieService.ts, dentro da pasta services. Essa organização foi escolhida para separar a comunicação principal com a API das telas do aplicativo. Na tela de detalhes, também é realizada uma requisição à API utilizando o ID do filme para buscar as informações completas. Essa separação facilita a organização e a manutenção do código.

 11. O projeto funcionou sem erros após as instalações? Se não, quais ajustes foram necessários?

Não funcionou completamente de primeira. Durante o desenvolvimento foram necessários alguns ajustes na estrutura das telas e na integração com a API. Também foi necessário corrigir a tela de detalhes para que ela recebesse o ID do filme e buscasse as informações diretamente na API. Depois desses ajustes, o aplicativo passou a executar corretamente e a apresentar os filmes e seus detalhes.

 12. Houve conflito de versão com o Expo SDK? Como foi resolvido?

Não houve um conflito de versão que impedisse o funcionamento do projeto. O projeto foi criado utilizando o Expo SDK 57. Para as bibliotecas relacionadas ao Expo e ao React Native, foi utilizado o comando npx expo install, que verifica a versão do SDK e instala versões compatíveis. Dessa forma, conseguimos manter as dependências compatíveis com o projeto.

 13. Por que documentar as decisões desde o início?

Documentar as decisões desde o começo ajuda a registrar como o projeto foi desenvolvido e por que determinadas tecnologias e formas de organização foram escolhidas. Isso também facilita a continuidade do projeto, pois outras pessoas conseguem entender melhor o que foi feito e como o aplicativo está organizado.

 14. O README é suficiente para uma pessoa nova entender o projeto?

Sim. O README apresenta o objetivo do aplicativo, as tecnologias utilizadas, como instalar as dependências e como executar o projeto. Também explica de forma resumida como funciona a API e como o aplicativo está organizado. Com essas informações, uma pessoa que não participou do desenvolvimento consegue ter uma visão geral e executar o projeto.

 15. O que o primeiro commit representa?

O primeiro commit representará a primeira versão do projeto que será registrada no controle de versão. Ele deverá conter a estrutura do aplicativo, as telas, os componentes, os serviços e os arquivos necessários para executar o projeto, sem incluir arquivos que não devem ser enviados ao repositório.

 16. Por que utilizar controle de versão desde o início?

Utilizar controle de versão desde o início permite acompanhar as mudanças feitas no projeto e ter um histórico das versões. Também ajuda a evitar a perda do código caso algum problema aconteça e facilita o trabalho em equipe, pois cada alteração pode ser registrada e acompanhada.

 17. Quais arquivos e pastas devem ficar fora do controle de versão e por quê?

Devem ficar fora do controle de versão arquivos e pastas que são gerados automaticamente ou que possuem informações que não devem ser compartilhadas. No projeto, isso inclui a pasta node_modules, a pasta .expo e o arquivo .env. A pasta node_modules contém as dependências instaladas e pode ser recriada pelo npm install. A pasta .expo possui informações específicas do ambiente de desenvolvimento. Já o .env contém a chave da API e não deve ser enviado para o GitHub.
