/*
Para realização de testes utilizando iframes, seré necessário instalar:
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