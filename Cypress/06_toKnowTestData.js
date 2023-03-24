/*
O conceito é ter uma única função contendo a lógica, e o testData variar dentro do cenário.

sgue exemplo de uma tela de login

arquivo função.js
    export function Login ( testData) {
    let po=elementosTeladeLogin()
    if(testData.user != '')
    {
        type (po.userNameElement, testData.user)
    }
    if(testData.password != '')
    {
        type (po.passElement, testData.password)
    }
    cy.get(po.loginBtnElement).click()
    cy.wait(5000)
}
export function Validar (testData) {
    let po = elementosTeladeLogin()
    let po2 = elementosTelaGTMAplicacoes()
    if (testData.testOk){
            cy.xpath(po2.gtmTitleElement).should('be.visible')
            cy.xpath(po2.gtmTitleElement).should('have.text', 'Aplicações')
            cy.xpath(po2.gtmUserIdentification).should('be.visible')
            cy.xpath(po2.gtmUserIdentification).should('contain.text', testData.user )
    }
    else{
    cy.xpath(po.alertElement).should('be.visible')
    cy.xpath(po.alertMsgElement).should('have.text', 'Usuário ou Senha incorretos.')
    }
}



arquivo cenario.cy.js
    
describe('02 - [WEB] - [Home Page] - Validar Login Invalido - Usuario em Branco e Senha em Branco', () => {
    //Caso de teste, onde realizo a chamada da funçao com meus steps
    it('Automação', () => {
        var testData = {
            user:      '',
            password:  '', 
            testOk: false
        }
        //UserEmptyPassEmpty()
        visitar()
        Login(testData)
        Validar(testData)
    })
})


*/