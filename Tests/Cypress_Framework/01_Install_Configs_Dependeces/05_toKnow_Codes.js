
/*
Este comando é utilizado para que a página aberta do navegador abra em um tamanho diferente, definido pelo Q.A.
    O mesmo será inserido no arquivoo cypress.config.json
    cy.viewport(1024, 768)

    desribe('texto', () => {
        beforeEach(() => {                      Este comando será inserido antes de cada caso de teste, mantendo interdependência entre os testes.
            comando
        })
    })

    it('texto', () => {                         Caso de teste
        comando
    })

    cy.reload()                                                 //realizará um recarregamento na págima

    Para realizar o scroll do mouse, ou seja, barra de rolagem do navegador:
.scrollIntoView()

    Para encontrar elementos em tela:

GET: cy.get(‘[data-cy=name]’)
    CONTAINS: cy.contains(“Cadastrar”)

    Para interagir com elementos de tela:

Type: utilizado para escrever
    cy.get(‘[data-cy=name]’).type(“Joaozinho”);

Click: utilizado para clicar no elemento selecionado
    cy.get(locators.CADASTRO.btnCadastrar).click()

Selecionar: utilizado para selecionar um elemento
    cy.get(Loc.CADASTRO.campoUF).select(“RS”);

Check/Uncheck: utilizado para aplicar o check
    cy.get(‘[type=”checkbox”]’).check()

Asserções para nossos testes:
    Should
    cy.get(locators.MENU.nomeUsuarioLogado).should(“contain.text”, “Joaozinho”);

Expect
    expect(response.body).has.property(“id”);

parent()
    Navego para o elemento pai da asserção

siblings()
    Navego entre o elemento irmão da asserção

children()
    Navego para o elemento filho da asserção

cy.xpath
    Para elementos sem ID

cy.get
    Para elemento com ID

cy.clear()
    Para limpar um determinado campo selecionado

cy.window()
    Consigo manipular alertas por exemplo.
*/