*** Comments ***

Dicas de comandos e algumas soluções

Para inserir uma linha em branco (ou pular uma linha), o comando a ser utilizado é:
    Log To Console    ${EMPTY}

Para realizar uma execução geral de todos os testes, é só apontar a pasta responsável por ter todos os arquivos.
    o comando utilizado será: 
        robot -d ./logs Nome_Do_test.robot = Este comando irá inserir o teste dentro de uma pasta chamada logs
        robot Nome_do_teste.robot = irá executar o apenas o teste indicado.

    Para executar apenas um testes da suite:
        robot -t "caso de teste 02 - Validar XXXX" amazon_teste.robot
    Para executar TODOS os testes de uma pasta:
        robot Tests
    Para executar TODOS um testes da suite:
        robot amazon_teste.robot
    Para executar apenas uma Tag expecifica:
        robot -i menus amazon_teste.robot
    Para excluir, não executar os testes com a Tag expecifica 
        robot -e menus amazon_teste.robot
    Para criar uma pasta (como o nome escolhido) e joga os arquivos gerado dentro dela
        robot -d resultados amazon_teste.robot
    Para colocar os arquivos que for gerando em uma pasta existente 
        robot -d ./resultados amazon_teste.robot
    substitui O valor de uma variavel global, apenas naquela execução do teste (depois volta a ser como antes, o mesmo valor anterior) 
        robot -v BROWSER:firefox amazon_teste.robot
        robot -v URL:http:www.youtube.com amazon_teste.robot
    Pode combinar varios parametros de opções (tudo numa mesma execução)(tem que passar a opção e o valor sempre: 
        robot -v BROWSER:firefox -i menus -d resultados amazon_teste.robot

    Open Browser
    ...    abrir o Browser e ir para url
    Go To
    ...    ir para o menu url....
    Title Should Be
    ...    Valida o titulo
    Select Checkbox
    ...    selecionar checkbox
    Checkbox Should Be Selected
    ...    validar se o checkbox foi selecionado
    Select Radio Button
    ...    Selecionar Radio Button
    Radio Button Should Be Set To
    ...    validar se o Radio Buton foi selecionado
    Select From List By Label
    ...    locaito (pega da caixa inicial) +  Texto  (selecionar alguem da lista (combobox) pelo nome)
    Select From List By Value
    ...    selecionar alguem da lista (combobox) pelo valor	
    Get Selected List Value
    ...    Pegar um valor e guardar em uma variavel (para comparar depois)	
    Get Selected List Label
    ...    Pegar um valor de um texto e guardar em uma variavel (para comparar depois)
    Click Element
    ...    Clicar em qualquer coisa (ele é genérico, pode usar tb para clicar em botão)
    Page Should Contain
    ...    Validar mensagem apresentada
    Sleep
    ...    esperar
    Capture Page ScreenshoT
    ...    Captura a imagem da pagina inteira   (pode passar nome para o screenshot, se quiser:  nome_exemplo.png
    Capture Element Screenshot
    ...    Captura apenas o elemento passado no location
    Should Be Equal
    ...    Valida se dois valores são iguais
    Should Be True
    ...    "May" == "May"
    Wait Until Element Is Visible
    ...    Aguardar até o elemento esteje visivél 
    Wait Until Page Contains
    ...    id:xxxx	A frase a ser validada!	(valida se apresenta na pagina o Texto "xxxxx")
    Wait Util Element Is Enabled
    ...    id:xxx  30  (Aguarda até que o elemento habilite (por padrão, espera até 5 segundos, pode almentar se quiser))
    Element Should Be Visible
    ...    Valida se o elemento está sendo aprensentado na pagina	
    Element Should Contain
    ...    (id:title    Solicitar coleta)  Valida se o texto contido no elemento é aquele
    Element text Should Be
    ...    (Location, expectativa) como se fosse o equal 
    Maximize Browser Window
    ...    Maximiza a tela para o tamanho do monitor
    Set Test Variable   ${XXX}
    ...    Guarda o valor da variavel para comparar depois
    Set focus to element
    ...    id: XXX      Simula o tab movendo para o elemento e dando entrer
    Set screenshot directory
    ...    Para passar o caminho da pasta de onde vai gravar os prints
    Set Variable
    ...    ${variavel_Nova}     Set Variable        ${NOME} ${SOBRENOME}	Pega valor de uma variavel e guarda em uma nova varivel para comparar depois
    Set test variabl
    ...    ${nome da varivel que quero guarda}	Depois consigo usar para comparar em qualquer teste
    Press Keys
    ...    ${Input_Ida}  ARROW_DOWN (simula apertando a seta para baixo)
    Press Keys
    ...    ${Input_Ida}  ENTER 	 (simula apertando a tecla entrer)

Alguns comando muito utilizados e sua estruturação:
    Open Browser                     url    navegador
    Click Element                    locator
    Input Text                       localizador    texto
    Close Browser                    ((fecha navegador))
    Element Text Should Be           localizador    Texto esperado
    Wait Until Element Is Visible    localizador    tempos em segundos
    Sleep                            Tempo em segundos
    Get Text                         Texto
    Should be True                   Texto
    Wait Until Page Contains         Texto na página

Um place holder deverá ser buscado utilizando por exemplo
        input[placeholder="Busque aqui..."]
        input[placeholder^=Busque]          : Neste caso teremos o COMECE...
        input[placeholder*=Busque]          : Neste caso teremos o CONTÉM...
        input[placeholder$="..."]           : Neste caso teremos o TERMINA...

Para fazer a impressão de algo no visor deverá ser utilizado o comando:
        Log to console    Texto

Para realizar uma equeação matemática deverá utilizar o comando:
        ${variavelResposta}    Evaluate    Equeação
        Ex:
        ${result}    Evaluate    1+2
        Log to console    ${result}

