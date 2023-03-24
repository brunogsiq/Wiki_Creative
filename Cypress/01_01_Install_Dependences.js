/*
    ATENÇÃO : DEPENDÊNCIAS!!!

    Para utilizarmos comando utilizando xpath e  waituntil entre outras, será necessário instalar as dependências:

    01 - Instalação e como usar: https://www.npmjs.com/package/cypress-wait-until
    npm install -D cypress-wait-until
    Após:
        Add this line to your project's cypress/support/commands.js:
        import 'cypress-wait-until';
        and add in cypress/support/e2e.js:
        require('cypress-wait-until')

        Exemplos:
            // wait until a cookie is set
            cy.waitUntil(() => cy.getCookie('token').then(cookie => Boolean(cookie && cookie.value)));

            // wait until a global variable has an expected value
            cy.waitUntil(() => cy.window().then(win => win.foo === "bar" ));

            // sync function works too!
            cy.waitUntil(() => true);

            // with all the available options
            cy.waitUntil(() => cy.window().then(win => win.foo === "bar"), {
            errorMsg: 'This is a custom error message', // overrides the default error message
            timeout: 2000, // waits up to 2000 ms, default to 5000
            interval: 500 // performs the check every 500 ms, default to 200
            });
    
    02 - 
        ATENÇÃO: DEPENDÊNCIAS ALTERAÇÕES em: package-lock.json (1) e package.json(2)
            Em (1):
                {
                "name": "ex06_magalu",
                "version": "1.0.0",
                "lockfileVersion": 3,
                "requires": true,
                "packages": {
                    "": {
                    "name": "ex06_magalu",
                    "version": "1.0.0",
                    "license": "ISC",
                    "dependencies": {
                        "cypress": "^12.8.1"
                    },
                    "devDependencies": {
                        "cypress-wait-until": "^1.7.2",
                        "cypress-xpath": "^2.0.1"
                    }
            Em (2):
                     "devDependencies": {
                        "cypress-wait-until": "^1.7.2",
                        "cypress-xpath": "^2.0.1"
                    },

    03 - Instalação e como usar: https://fakerjs.dev/guide/
    npm install @faker-js/faker --save-dev
    
    Exemplos:
        Dentro do arquivo de teste, função, onde será necessário utilizar o Faker, inserir:
        import { faker } from '@faker-js/faker';
        const randomName = faker.name.fullName(); // Rowan Nikolaus
        const randomEmail = faker.internet.email(); // Kassandra.Haley@erich.biz


    04 - Para realização de testes utilizando iframes, seré necessário instalar:
    npm install -D cypress-iframe
    Após, será necessário inserir em cypress/support/commands.js    , inserir:
    import 'cypress-iframe'; or require('cypress-iframe');
    Exemplos:
            You can now use the three included commands.

            frameLoaded
            This command checks that an iframe has loaded onto the page

            Example:

            // This will verify that the iframe is loaded to any page other than 'about:blank'
            cy.frameLoaded()
            
            // This will verify that the iframe is loaded to any url containing the given path part
            cy.frameLoaded({ url: 'https://google.com' })
            cy.frameLoaded({ url: '/join' })
            cy.frameLoaded({ url: '?some=query' })
            cy.frameLoaded({ url: '#/hash/path' })
            
            // You can also give it a selector to check that a specific iframe has loaded
            cy.frameLoaded('#my-frame')
            cy.frameLoaded('#my-frame', { url: '/join' })
            iframe
            This will cause subsequent commands to be executed inside of the given iframe

            Example:

            // This will verify that the iframe is loaded to any page other than 'about:blank'
            cy.iframe().find('.some-button').should('be.visible').click()
            cy.iframe().contains('Some hidden element').should('not.be.visible')
            cy.find('#outside-iframe').click() // this will be executed outside the iframe
            
            // You can also give it a selector to find elements inside of a specific iframe
            cy.iframe('#my-frame').find('.some-button').should('be.visible').click()
            cy.iframe('#my-second-frame').contains('Some hidden element').should('not.be.visible')
            enter
            This can be used to execute a group of commands within an iframe

            Example:

            // This will verify that the iframe is loaded to any page other than 'about:blank'
            cy.enter().then(getBody => {
            getBody().find('.some-button').should('be.visible').click()
            getBody().contains('Some hidden element').should('not.be.visible')
            })
            
            // You can also give it a selector to find elements inside of a specific iframe
            cy.enter('#my-iframe').then(getBody => {
            getBody().find('.some-button').should('be.visible').click()
            getBody().contains('Some hidden element').should('not.be.visible')
            })
    */
