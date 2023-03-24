/*
Instalação e como usar: https://www.npmjs.com/package/cypress-xpath
    npm install -D cypress-xpath
    Após
        Then include in your project's support file e2e.js
        require('cypress-xpath');

        Exemplos:
        Use After installation your cy object will have xpath command.
        it.('finds list items', () => {
        cy.xpath('//ul[@class="todo-list"]//li').should('have.length', 3);
        });
        You can also chain xpath off of another command.

        it.('finds list items', () => {
        cy.xpath('//ul[@class="todo-list"]').xpath('./li').should('have.length', 3);
        });
        As with other cy commands, it is scoped by cy.within().

        it.('finds list items', () => {
        cy.xpath('//ul[@class="todo-list"]').within(() => {
            cy.xpath('./li').should('have.length', 3);
        });
        });
            note: you can test XPath expressions from DevTools console using $x(...) function, for example $x('//div') to find all divs.
*/