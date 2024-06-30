# Implementação do Event Bus em Node.js com NestJS e RxJS

Você já implementou esse padrão em algum projeto? Veja como é interessante e simples. Podemos transformar completamente o comportamento da nossa aplicação!

Imagine ter uma aplicação de grande escala contendo muitas classes interagindo entre si, e você deseja uma maneira de fazer com que essas classes se comuniquem, mantendo os princípios de baixo acoplamento e separação de responsabilidades. O padrão Event Bus pode ser uma excelente solução para o seu problema.

## O que é um Event Bus?

A ideia de um barramento de eventos é bastante semelhante ao barramento estudado em redes (topologia de barramento). No nível dos componentes de uma aplicação, os "computadores" são os componentes do seu aplicativo, a "mensagem" é o evento ou os dados que você deseja comunicar e o "pipeline" é o seu objeto EventBus.

## Exemplo de Uso

Neste exemplo, vamos mostrar como usar um Event Bus em uma aplicação Node.js utilizando o framework NestJS.

### Estrutura do Projeto

```
src/
├── common/ # Pacote de arquivos compartilhados
├── email-handlers/ # Módulo do serviço que simula o envio de e-mail
├── event-bus/ # Módulo do event-bus
└── user/ # Módulo de usuário
```

### Implementação com RxJS

Para implementar o Event Bus em nosso projeto de exemplo, utilizaremos a biblioteca RxJS (Reactive Extensions for JavaScript), conhecida por sua programação reativa em JavaScript. Ela é especialmente útil para lidar com fluxos de eventos assíncronos de maneira simples e declarativa.

#### Exemplo de Implementação

Aqui está a implementação do serviço em nosso módulo EventBus, utilizando RxJS. Nele, temos métodos como `publish` e `ofType`, que facilitam o envio e a recepção de eventos de forma intuitiva.

### Exemplo Prático

Criamos um modelo de evento para o registro de contas. Cada vez que um usuário é criado, um novo evento é publicado para informar ao sistema sobre os dados desse novo usuário.

### Inscrição em Eventos

Desenvolvemos um módulo chamado `email-handlers` para simular um serviço de envio de e-mail. Por enquanto, estamos apenas exibindo logs dos eventos para demonstrar que tanto a publicação quanto a inscrição nesses eventos estão funcionando.

### Benefícios

A implementação do EventBus pode ser benéfica para sua base de código, pois ajuda a acoplar livremente suas classes e promove um padrão de publicação-assinatura. Também facilita a interação entre componentes sem que eles estejam cientes uns dos outros.
