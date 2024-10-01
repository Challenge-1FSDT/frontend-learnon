# Tech Challenge 03

Grupo 14

Integrantes

Anelise Estevam - RM353230

Gustavo de Souza Fonseca - RM94067

Anderson da Silva Machado - RM355290

João Pedro Sanches Luciano - RM354782

# Tópicos

1. Descrição do Projeto

   1. Objetivo do Projeto
   2. Repositório
2. Funcionalidades

   1. Setup inicial
   2. Requisitos funcionais
   3. Requisitos técnicos
   4. Arquitetura utilizada
   5. Guia de uso da aplicação
3. Trabalho em grupo

   1. Processo de trabalho em grupo
   2. Dificuldades encontradas

## 1 Descrição do Projeto

O projeto visa criar uma API para uma aplicação onde permita que Alunos postem suas dúvidas, enquanto professores possam responder às perguntas dos alunos.

Todo o back-end do projeto foi desenvolvido em Node.js, onde o grupo criou as rotas e os acessos para criação, edição, exclusão, busca e leitura de posts.

1. Objetivo do Projeto

Desenvolver uma interface gráfica para a aplicação de blogging utilizando React. A aplicação deve ser responsiva, acessível e fácil de usar, permitindo aos docentes e alunos interagir com os diversos endpoints REST já implementados no back-end.

2. Repositório

    [https://github.com/Challenge-1FSDT/frontend-learnon](https://github.com/Challenge-1FSDT/frontend-learnon)

## 2 Funcionalidades

### 1 Setup

    Para a realização do projeto, utilizamos uma variedade de tecnologias que foram essenciais para o desenvolvimento e a execução eficaz do sistema. As principais tecnologias empregadas foram:

* ReactJS: Biblioteca JavaScript para construção de interfaces de usuário.
* TypeScript: Adotado para proporcionar tipagem estática ao JavaScript, facilitando a detecção de erros durante o desenvolvimento e melhorando a manutenção do código.
* NextJS: Framework React que facilita a construção de aplicações web de maneira otimizada e escalável.
* Tailwind CSS: Framework de CSS utilitário que permite a criação rápida de interfaces modernas e responsivas, ao fornecer classes que podem ser aplicadas diretamente no HTML.

Essas tecnologias, combinadas, nos proporcionaram uma base sólida e moderna para o desenvolvimento do projeto, permitindo a criação de uma aplicação eficiente, escalável e de fácil manutenção.

### 2 Requisitos funcionais

A interface gráfica deve incluir as seguintes páginas e funcionalidades:

1. **Página principal (Lista de posts)**

* Exibir uma lista de todos os posts disponíveis.
* Cada item da lista deve mostrar o título, autor e uma breve descrição do post.
* Incluir um campo de busca para filtrar posts por palavras-chave.

2. **Página de leitura de post**

* Exibir o conteúdo completo de um post selecionado.
* Permitir comentários nos posts (opcional).

3. **Página de criação de postagens**

* Formulário para que docentes possam criar postagens.
* Campos para título, conteúdo e autor.
* Botão para enviar o post ao servidor.

4. **Página de edição de postagens**

* Formulário para que os(as) professores(as) possam editar postagens existentes.
* Carregar os dados atuais do post para edição.
* Botão para salvar as alterações.

5. **Página administrativa**

* Exibir uma lista de todas as postagens, com opções para editar e excluir cada post.
* Botões para editar e excluir postagens específicas.

6. **Autenticação e autorização**

* Implementar login para professores.
* Garantir que apenas usuários autenticados possam acessar as páginas de criação, edição e administração de postagens.

### **3 Requisitos técnicos**

1. **Desenvolvimento em React**

* Utilizar React para desenvolver a interface gráfica.
* Utilização de hooks e componentes funcionais

2. **Estilização e responsividade**

* Utilizar Styled Components ou outro método de estilização.
* Garantir que a aplicação seja responsiva, funcionando bem em dispositivos móveis e desktops.

3. **Integração com Back-End**

* Realizar chamadas aos endpoints REST para obter, criar, editar e excluir posts.
* Gerenciar o estado da aplicação com ferramentas como Context API ou Redux (opcional).

4. **Documentação**

* Documentação técnica detalhada do front-end no README do repositório, incluindo setup inicial, arquitetura da aplicação e guia de uso.

### 4 Arquitetura utilizada

    A arquitetura do**Next.js 14** é uma evolução do framework voltada para fornecer ainda mais flexibilidade e otimizações de performance em aplicações React. A principal mudança estrutural é a consolidação da **App Router**, que introduz uma maneira mais poderosa de gerenciar rotas e layouts em aplicações modernas. Aqui estão os principais pontos da arquitetura:

#### 1. **App Router**

O **App Router** substitui o tradicional `pages` router, oferecendo uma abordagem mais flexível e baseada em pastas para gerenciamento de rotas. Agora, as pastas dentro da pasta `app/` controlam diretamente a estrutura de rotas. Essa nova arquitetura também permite a implementação de layouts aninhados, compartilhamento de estado entre rotas e rotas paralelas.

#### 2. **Renderização Híbrida e Flexível**

A arquitetura do Next.js 14 combina renderização **client-side** (lado do cliente), **server-side** (lado do servidor), e **static generation** de forma eficiente. O framework consegue decidir de forma inteligente qual método usar, conforme a necessidade da página ou do componente, otimizando o tempo de carregamento e a experiência do usuário:

- **Server-side Rendering (SSR)**: Renderiza a página no servidor a cada requisição.
- **Static Site Generation (SSG)**: Gera as páginas de forma estática durante o build, servindo-as rapidamente.
- **Incremental Static Regeneration (ISR)**: Permite atualizar partes estáticas de forma incremental, com uma combinação de SSG e novas atualizações sob demanda.
- **Client-side Rendering (CSR)**: Componentes podem ser renderizados no cliente para uma experiência interativa.

#### 3. **Layouts e Páginas Aninhadas**

Uma das grandes novidades da arquitetura é o suporte nativo a **layouts aninhados**, que permitem a reutilização de partes da UI (como cabeçalhos, rodapés ou barras laterais) em diferentes rotas, sem perder o estado da aplicação. Isso melhora a modularização e facilita o desenvolvimento de componentes de interface reutilizáveis.

#### 4. **Componentes Assíncronos e Suspense**

Com a introdução do React **Server Components** e melhorias no uso do **React Suspense**, o Next.js 14 permite que dados sejam buscados de forma assíncrona, com um carregamento otimizado e sem impactar negativamente a experiência do usuário. O framework gerencia a **hidração** de componentes de forma mais eficaz, dividindo o carregamento da interface e dos dados em etapas.

#### 5. **API Routes e Server Actions**

O Next.js 14 continua suportando **API Routes** nativas, permitindo criar endpoints dentro da própria aplicação, eliminando a necessidade de um backend separado para funções simples. Além disso, foram introduzidas as **Server Actions**, que permitem executar ações diretamente do servidor sem a necessidade de APIs REST tradicionais, simplificando o desenvolvimento full-stack.

#### 6. **Parallel Routes e Intercepting Routes**

Essa versão também traz inovações como **Parallel Routes**, que permitem renderizar múltiplas rotas ao mesmo tempo, e **Intercepting Routes**, que possibilitam a manipulação de rotas para casos como sobreposições e modais, sem a necessidade de navegar entre páginas.

#### 7. **Otimizações de Performance e Tamanho do Bundle**

Com novas técnicas de fragmentação e separação de código (code splitting), o Next.js 14 melhora o tempo de carregamento inicial das páginas, além de otimizar o tamanho do **JavaScript bundle** entregue ao navegador. Isso é feito através de carregamento de pacotes sob demanda e através do **React Server Components**, que minimizam a quantidade de JavaScript no lado do cliente.

#### Conclusão

A arquitetura do Next.js 14 é construída para ser escalável, modular e otimizada para performance. As novas funcionalidades como **App Router**, **layouts aninhados**, e suporte nativo a renderização híbrida oferecem aos desenvolvedores uma maior flexibilidade e controle sobre como construir e otimizar suas aplicações, promovendo uma melhor experiência para os usuários.

### 5 Guia de uso da aplicação

6. Instalação

```shell
$ npm install
```

2. Executando a aplicação

```shell
# development
$ npm run dev

# production mode
$ npm run build
```

## 3 Trabalho em grupo

1. Processo de trabalho em grupo

Os contatos durante o desenvolvimento do projeto foram feitos via Discord e Whatsapp, facilitando qualquer dúvida que pudesse aparecer durante o desenvolvimento. Dessa forma, considerando os outros projetos em grupo, a comunicação foi muito mais facilitada, gerando ao atendimento rápido das demandas encontradas, e na resolução dos problemas.

2. Dificuldades encontradas

Foi necessário realizar pesquisas adicionais além dos vídeos disponibilizados na pós-graduação para complementar nosso conhecimento. Utilizamos a plataforma Alura para acessar cursos extras que foram essenciais para o entendimento completo dos conceitos e técnicas necessários para o projeto. Esse esforço extra de aprendizagem nos permitiu adquirir habilidades práticas que não estavam completamente cobertas no material do curso, contribuindo significativamente para o nosso progresso e sucesso na execução do projeto.

Outra dificuldade encontrada foi durante a integração com o back-end. Algumas dependências haviam mudado desde as utilizadas durante o curso, precisando de pesquisas extensas para resolver os problemas encontrados.

**
