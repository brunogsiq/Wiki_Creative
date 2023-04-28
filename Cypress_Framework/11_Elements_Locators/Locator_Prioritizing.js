
/*Caso deseje enteder mais sobre a ordem de priorização do cypress sobre locator, posso buscar na documentação.
Através do código que será utilizado no teste, posso mudar a ordem de priorização da ferramenta.
Para modificar, deve inserir o mesmo no arquivo support/e2e.js

Cypress.SelectorPlayground.defaults({
    selectorPriority: ['id', 'class', 'attributes', 'data-cy', 'data-test', 'data-testid', 'tag', 'nth-child']
})

Para realizar esta parte do curso, foi inserido o mesmo, assim o cypress já fará suas prioridades de forma diferente*/