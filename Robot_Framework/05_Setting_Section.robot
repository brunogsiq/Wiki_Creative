*** Comments ***

Em *** Settings *** serão inseridos as configurações, podendo realizar a chamada de bibliotecas e descrição do projeto.
    Os comando utilizado para realização serão:

    Ex01:
        Documentation       Descrição da documentação do projeto
        Library             SeleniumLibrary

Entendendo o começo do código e as funções Setup e Teardown
    Suite Setup -        Executa KW antes da suite
    Test Setutp -        Executa KW antes do teste
    Suite Teardown -     Executa KW após execucao suite
    Test Teardown -      Executa KW após execucao teste
    Ex:
        Suite Setup      Log To Console      Início da execução.____________________________________________________P X F_
        Test Setup       Open Browser        ${urlPadrao}    ${navegador}
        Test Teardown    Close Browser
        Suite Teardown   Log To Console      Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_

O nosso resultado utilizando os comandos citados é:
        Início da execução.____________________________________________________P X F_
        01 - Tl. Laptops - Adicionando Produto no Carrinho - MacBook Pro
        DevTools listening on ws://127.0.0.1:55655/devtools/browser/bb623e95-5c1c-4679-9969-1a14694bba80
        01 - Tl. Laptops - Adicionando Produto no Carrinho - MacBook Pro      | PASS |
        ------------------------------------------------------------------------------
        02 - Tl. Laptops - Adicionando Produto no Carrinho - MacBook Pro
        DevTools listening on ws://127.0.0.1:55674/devtools/browser/b32d2c6f-5b28-40b2-8246-0d44a3e073a5
        02 - Tl. Laptops - Adicionando Produto no Carrinho - MacBook Pro      | PASS |
        ------------------------------------------------------------------------------
        Execução Finalizada. Resultado(s) do(s) Teste(s).______________________P X F_
        Ex18 Site Demo Blaze :: Este é um projeto do curso da Chronos Academy | PASS |
        2 tests, 2 passed, 0 failed
        ==============================================================================
