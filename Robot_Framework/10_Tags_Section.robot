*** Comments ***

Poderemos trabalhar com argumentos, assim, antes da primeira etapa do teste, caso eu desejar que alguma informação
    seja inserida, utilizarei o comando que será mostrado, antes da primeiração Ação.
    Ex:
    ***Test Cases***
    Cenario: Exibir nome no console
        Imprimir nome e sobrenome em linhas apartadas 01    Bruno    Siqueira
    ***Keywords***
    Imprimir nome e sobrenome em linhas apartadas
        [Arguments]    ${NOME}    ${SNOME}
        Log To Console    ${EMPTY}
        Log To Console    Seu nome preenchido foi: ${NOME}
        Log To Console    Seu sobrenome preenchido foi: ${SNOME}
        Log To Console    ${EMPTY}
        
Tags
    AND - ex de comando: robot -i tag1ANDtag2 01_home_page.robot
    OR    - ex de comando: robot -i tag1ORtag2 01_home_page.robot
    NOT - ex de comando: robot -i tag1NOTtag2 01_home_page.robot
    Ex:
    robot -i nomeDaTag nomeDoArquivo.robot