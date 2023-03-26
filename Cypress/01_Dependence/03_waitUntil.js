/*
Instalação e como usar: https://www.npmjs.com/package/cypress-wait-until
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
*/