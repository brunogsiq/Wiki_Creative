*** Comments ***

Escopos de variaveis
    Global:   P/a uso em todos os pontos do teste -    Criacao: Set Global Variables ${ABC}
    Suite:    P/ uso em todos os pontos da suite -    Criacao: Set Suite Variable ${DEF}
    Test:     P/ uso em todos os pontos do cenario de teste - Criacao: Set Test Variable ${GHI}
    Local:    P/ uso somente na keyword onde esta declarada - Criacao: ${xyz} Evaluate 1+1

    *** Settings ***
    Documentation   Exemplo de escopo de variáveis: GLOBAIS, SUITE, TESTE (test case) e LOCAL (keyword)
    Library         String

    *** Variable ***
    ${GLOBAL_INSTANCIADA}     Minha variável GLOBAL_INSTANCIADA foi instanciada para a suíte

    *** Test Cases ***
    Caso de teste de exemplo 01
        Uma keyword qualquer 01
        Uma keyword qualquer 02

    Caso de teste de exemplo 02
        Uma keyword qualquer 02
        Uma keyword qualquer 03

    Caso de teste de exemplo 03
        Uma keyword qualquer 04

    *** Keywords ***
    Uma keyword qualquer 01
        ${GLOBAL_CRIADA_EM_TEMPO_EXECUCAO}     Generate Random String
        #A variável "global" pode ser utilizada em todas as suítes em execução
        Set Global Variable    ${GLOBAL_CRIADA_EM_TEMPO_EXECUCAO}
        #A variável "suite" pode ser utilizada somente nos testes da suíte em execução
        Set Suite Variable     ${SUITE_CRIADA_EM_TEMPO_EXECUCAO}    Variável da suíte
        #A variável "test" pode ser utilizada somente nas todas as keywords do teste em execução
        Set Test Variable      ${TESTE_01}   Variável do teste 01
        Log         ${TESTE_01}
        #A variável "local" pode ser utilizada somente na keyword em execução
        ${LOCAL}    Set Variable    Variável local da keyword 01
        Log   ${LOCAL}

    Uma keyword qualquer 02
        ${LOCAL}     Set Variable    Variável local da keyword 02
        Log    ${LOCAL}
        Log    ${GLOBAL_INSTANCIADA} / ${GLOBAL_CRIADA_EM_TEMPO_EXECUCAO} / ${SUITE_CRIADA_EM_TEMPO_EXECUCAO} / ${LOCAL}
        # A keyword abaixo vai funcionar no Caso de Teste 01 e falhar no Case de Teste 02
        Log    ${TESTE_01}

    Uma keyword qualquer 03
        ${LOCAL}     Set Variable    Variável local da keyword 03
        Log    ${LOCAL}
        Log    ${GLOBAL_INSTANCIADA} / ${GLOBAL_CRIADA_EM_TEMPO_EXECUCAO} / ${SUITE_CRIADA_EM_TEMPO_EXECUCAO} / ${LOCAL}

    Uma keyword qualquer 04
        ${LOCAL}     Set Variable    Variável local da keyword 04
        Log    ${LOCAL}
        Log    ${GLOBAL_INSTANCIADA} / ${GLOBAL_CRIADA_EM_TEMPO_EXECUCAO} / ${SUITE_CRIADA_EM_TEMPO_EXECUCAO} / ${LOCAL}
