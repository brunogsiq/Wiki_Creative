#01 - Seção de comentários
*** Comments ***

Qualquer coisa escrita aqui não influenciará o código.

#02 - Seção de Configuração
*** Settings ***

#Serão inseridas aqui as bibliotecas(library) utilizadas no projeto, será "puxado" outros arquivos como por exemplo o de variáveis, atráves do comando Resource
#    Poderá ser adicionado a seção de documentação do projeto.
#    Poderá ser inserida a seção de Suite setup e teardown e Test setup e teardown

Documentation       Apresentando uma estrutura básica de montagem de teste com Robot Framework
Library             SeleniumLibrary


*** Variables ***

#Aqui serão declaradas as váriveis sejam globais ou locais.

${PESQUISA01}    Cassio Ramos

*** Test Cases ***

#Aqui serão escritos os cenários de teste, casos de testes, validações.

Cenário de teste 01: ACESSO
    Abrir o navegador

Cenário de teste 02: INSERIR
    Clicar no campo de pesquisa

Cenário de teste 03: REALIZAR
    Realizar pesquisa através do navegador

Cenário de teste 04: VALIDAR
    Validar acesso a página do Gmail

Cenário de teste 05: FECHAR
    Fechar o navegador


*** Keywords ***

#Aqui serão escritos as instruções para cada etapa do teste.

Abrir o navegador
    Open Browser    https://www.corinthians.com.br    chrome

Clicar no campo de pesquisa
    Click Element    css=a[href="https://www.corinthians.com.br/search"]

Realizar pesquisa através do navegador 
    Click Element    id=gsc-i-id1.gsc
    Input Text ${PESQUISA01}

Validar acesso a página do Gmail
    Element Text Should Be    css=locator    expected

Fechar o navegador
    Close Browser
