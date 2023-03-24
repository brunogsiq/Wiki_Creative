*** Comments ***

Utilizando o comando:
    Ex:
    Resource    ../../config/package.robot
        Será assim, utilizando ../ ((Igual é feito em linha de comanodo)) que navegaremos entre as pastas do projeto,
            para podermos assimilar cada arqivo necessário há outro.

Estruturação de Pastas de Projetos (Cada Nome Abaixo representará uma pasta)
    Ex. de projeto em pastas mais arquivos e código:
    NomeProjeto
        src                                        
            auto
                keywords
                    kws_Local(TelaHome).robot        #Keywords relevantes para autoamção da home page do site.
                        *** Settings ***
                            Documentation       Keywords relevantes para autoamão da home page do site
                            Resource            ../../config/package.robot
                            *** Keywords ***
                            Imprimir ficha cadastral do aluno
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Nome}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Idade}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Rua}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Numero}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Cep}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Bairro}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Cidade}
                                Log To Console    NOME ALUNO:    ${FORMULARIO_CADASTRO_ALUNO.Estado}
                pages
                    home_page.robot                       #Aqui estarão os objetos mapeados em variaveis da homepage do site.
                        *** Settings ***
                        Documentation       Aqui estarão os objetos mapeados em variaveis da homepage do site
                        *** Variables ***
                        @{FORMULARIO_CADASTRO_ALUNO}    Nome=Bruno Goncalves Siqueira    Idade=35    Rua=Alexandre H.    Numero=1910    Cep=01091 910    Bairro=São Jorge    Cidade=Santos    Estado=SP
            config
                hooks.robot                          #Este é o arquivo de configuração do roboot.
                    *** Settings ***
                    Documentation       Este é o arquivo de configuração do roboot
                    Resource            package.robot
                    *** Keywords ***
                    Test Setup      Log to Console    _P X F_
                    Test Teardown   Log To Console    Finishing----------------------------------------------------------- |Status|
                packpage.roboot                      #Este é o gerenciador de dependências da sua automação.
                    *** Settings ***
                    Documentation       Este é o gerenciador de dependências da sua automação
                    Library             SeleniumLibrary
                    ## Keywords ##
                    Resource            ../auto/keywords/kws_home.robot
                    ## Pages ##
                    Resource            ../auto/pages/home_page.robot
                    ## Hooks ##
                    Resource    hooks.robot
        test
            features
                teste.robot
            logs                                    #Nesta pasta ficarão os logs gerados a cada geração de suite de teste.
                log.html
                output.xml
                report.html

Há também a estruturação a partir deste conceito

Resources / Features 	
    Actions / Steps  (pages*) --> mapeamento dos objetos / elementos das páginas
        (*** Settings ***)
        (*** Keywords ***)
            chamar os passos e criar as keywords
                Ex:
                Acessar o site do yuotube
                    Open Browser 
Features / Elements
    base / configuration funções comuns
        Tests - (*** Test Cases ***)
    arquivos com os testes / casos de teste / fluxos de teste