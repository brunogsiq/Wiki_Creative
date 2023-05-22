*** Comments ***

    *** Keywords ***
    Aqui é a ${TERMO1} de teste ${NOME_DA_VARAIVEL1}    #Ação a ser realizada
        Should Contain    ${NOME_DA_VARIAVEL1}    ${TERMO1}

    Aqui é a ${TERMO2} de teste ""    #Ação a ser realizada
        Should Contain    ${NOME_DA_VARIAVEL2}    ${TERMO2}
