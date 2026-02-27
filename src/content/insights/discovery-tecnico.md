---
title: "Discovery Técnico: O Alicerce do Produto"
description: "A maioria dos projetos de software que falham não falham por falta de código — falham por falta de clareza no início. O discovery técnico é o investimento que separa produtos que funcionam de projetos que frustram."
pubDate: 2025-01-27
category: "Produto"
readTime: "5 min de leitura"
tags: ["Discovery", "Produto", "Arquitetura", "Metodologia"]
---

Todo projeto de software começa com uma ideia. E toda ideia carrega consigo uma série de premissas — sobre o usuário, sobre o problema, sobre a solução. O discovery técnico existe para testar essas premissas antes que elas se tornem linhas de código difíceis de mudar.

Não é uma fase opcional. É o que separa produtos que funcionam de projetos que frustram.

## O custo do "vamos começar a codificar"

Existe uma pressão legítima para mostrar progresso rápido. Stakeholders querem ver algo funcionando. A equipe quer sair do abstrato para o concreto. E assim, muitos projetos entram em desenvolvimento antes de ter clareza sobre o que estão construindo.

O problema aparece semanas depois: o fluxo principal não atende o caso de uso real do usuário. A integração com o sistema legado é mais complexa do que imaginado. O modelo de dados escolhido não suporta os relatórios que o negócio precisa.

Rework em estágio avançado custa, em média, de 5 a 10 vezes mais do que uma decisão corrigida antes do desenvolvimento começar. O discovery técnico é o melhor investimento de prevenção disponível.

## O que o discovery técnico responde

Um discovery bem conduzido responde perguntas que vão além do "o que vamos construir?":

**Sobre o usuário e o problema:**
- Quem são os usuários reais e o que eles precisam conseguir fazer?
- Qual é o problema principal, e o que está causando ele?
- Existem soluções alternativas que os usuários já usam (e por quê não são suficientes)?

**Sobre o contexto técnico:**
- Quais sistemas existentes precisam se integrar com a nova solução?
- Que restrições técnicas ou regulatórias existem?
- Qual é o nível de tolerância do negócio a indisponibilidade e performance?

**Sobre a solução:**
- Qual é o menor conjunto funcional que valida a hipótese central?
- Quais decisões de arquitetura são reversíveis e quais não são?
- Quais riscos técnicos precisam de prova de conceito antes do desenvolvimento pleno?

## Como conduzimos o discovery

Na Projekt, o discovery é uma fase estruturada com duração definida — tipicamente 2 a 4 semanas para projetos de médio porte. O resultado não é um documento extenso guardado em uma pasta, mas artefatos vivos que guiam o time durante todo o desenvolvimento:

**Problem statement:** uma frase clara que define o problema, para quem é e qual é o critério de sucesso. Parece simples — raramente é.

**Mapa de stakeholders:** quem tem interesse no projeto, quem vai usar, quem vai aprovar, quem pode vetá-lo. Compreender essa rede antes do desenvolvimento é fundamental para evitar surpresas.

**Decisões arquiteturais documentadas (ADRs):** para cada decisão técnica relevante — escolha de banco de dados, estratégia de autenticação, abordagem de integração — registramos o contexto, as opções consideradas e o racional da escolha. Isso poupa horas de "por que fizemos assim?" meses depois.

**Backlog inicial:** não um documento de requisitos de 80 páginas, mas um conjunto de épicos e histórias com critérios de aceitação claros, priorizados por valor e risco.

## Discovery não é design

Uma confusão frequente: discovery técnico e design (UX/UI) são fases diferentes. O discovery define o problema e a estrutura da solução. O design transforma isso em experiência concreta.

Você pode — e muitas vezes deve — fazer alguma prototipagem rápida durante o discovery para validar hipóteses. Mas um protótipo de alta fidelidade antes de entender o problema é uma armadilha: parece progresso, mas solidifica escolhas que ainda não foram validadas.

## O sinal de um discovery bem-feito

Você sabe que o discovery foi bem-feito quando, ao final dele, qualquer membro da equipe consegue responder sem hesitar:

- Para quem estamos construindo e qual é o problema deles?
- O que vamos entregar no primeiro ciclo de desenvolvimento?
- Que riscos técnicos nos preocupam e como vamos endereçá-los?

Se essas perguntas ficam sem resposta clara ao entrar no desenvolvimento, o projeto carregará ambiguidade até a entrega — e ambiguidade em projeto de software custa caro.

Invista no começo. É onde o retorno é maior.
