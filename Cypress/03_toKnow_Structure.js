/* 
Após o npm init

O primeiro arquivo criado é o package.json
    O conteúdo inicia do mesmo é:
        Ex:
            {
                "name": "ex01_amazon",
                "version": "1.0.0",
                "description": "Prática de Cypress utilizando o site da Amazon",
                "main": "index.js",
                "scripts": {
                    "test": "npx cypress open"
                },
                "author": "Bruno G. Siqueira",
                "license": "ISC"
            }

    Com o desenvolvimento do projeto, haverão mais informações inseridas

    Quando instalarmos o cypress e suas dependências (comando em 01_Anot...), a segunda pasta será craida dentro do projeto e um novo arquivo,
        node_modules      : Esta pasta estará cheia de tantas outras e arquivos.
        pacjage-lock.json : Arquivo .json

    Quando a interface do cypress for aberta, um arquivo cypress.config.js será inserido na sua pasta do projeto, responsável por algumas configurações do projeto.
    O Arquivo index.js onde será inserido a configuração do projeto.
    Será acrescentada ao seu projeto uma pasta chamada cypress, e nela estão contidas outras pastas como:
        downloads\
        fixtures\example.json
        support\commands.js & e2e,js

        Portando, estrturamente sendo apresentada da forma:
                cypress\
                    cypress\support\e2e.js
                    cypress\support\commands.js
                    cypress\fixtures\example.json
                node_modules\
                cypress.config.js
                package-lock.json
                packege.json

    Após na interface cypress, escolhe-se a opção Scaffold exameple specs, será acrescentada ao projeto uma pasta chamada
        e2e, que estara dentro do caminho cypress\e2e
            e também teremos ficando:
                cypress\e2e\1-getting-started && 2-advanced-examples

Os testes serão escritos da seguinte forma e estes arquivos ficarão inseridos na pasta cypress\e2e\1-getting-started
    nomeDoTeste.spec.js

As pastas 1-getting-started e 2-advanced-examples poderão ser apagadas pois as mesmas são exemplos de testes iniciais quando se abre a interface do cypress,
    Por tanto apenas acumulando arquivos que não serão necessários.

Conclui-se com isto que em e2e ficarão os cenários de teste,

    Atualmente, utilizo a seguinte estrutura de projeto:

    Estruturação do Projeto:
Empresa/
    projNameSistema/
        _wiki/
            duvidas.js
            documents.js
            structure.js
            caseTests.js
            explanationProject.js
       backend/
        automation/
            cypress/
                fixtures/
                support/
                tests/
                    lib/
                        dates/
                        function/
                        pageObjects/
                        scenes/
            node_modules/
            cypress.config.js
            package.json
            package-lock.json
            .gitignore
        frontend/
            automation/
                cypress/
                    fixtures/
                    support/
                    tests/
                        lib/
                            dates/
                            function/
                            pageObjects/
                            scenes/
                node_modules/
                cypress.config.js
                package.json
                package-lock.json
                .gitignore
        Readme.md

    Em fixtures, teremos uma pasta para utilização de dados, ou seja, a função do arquivo json.

    Em support, utilizaremos para funções auxiliares, como novos comandos.

    Em package.json, posso ir na sessão de scripts e add os comandos npx cypress run ou npx cypress open
            e utilizando o comando npm test, o mesmo irá executar o script seja por back ou g.i do cypress.









*/