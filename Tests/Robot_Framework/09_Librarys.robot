*** Comments ***

Sobre Lybraries, existem diversas. Falaremos das mais utilizadas. 
    São exemplos de Libraries:
        Faker                  Geração de messa de dados
                                   pip install robotframework-fakerlibrary
        Screenshot             Realização de capturas de tela. instalação
                                   pip install robotframework-screencaplibrary
        Library                DateTime  (para pegar data e hora do pc)    ${XXX}    Get Current Date     result_format=%d-%m-%Y_HORAS%H-%M-%S    result_format=%d-%m-%YT%H:%M:%S  
        Builtln -              Principais keywords do Robot, importadas automaticamente
        Collections -          Contém as keywords para manipular listas(arrays) e dicionarios(hashes)
        Date Time -            Para maipular datas, horarios, e calculos deste elemento
        Dialogs -              Módulo que permite pausa a execução e interação com usuarios
        Debug                  Utilizada para pausar a execução, ou seja, adicionar breakpoint se necessário.
        Operating System -     Realiza tarefas comuns do sistema operaacional, como mover arquivos e pastas
        Process -              Executa processos do sistema operacional
        Screeshoot -           Realiza capturas de tela e gerencia os tela
        String -               Manipulação e verificação de conteúdo strings
        Telnet -               Conexão e envio de comandos a servidores telnet
        XML -                  Para manipulação e verificação de xmls
        Selenium -             Para intenação com navegadores web
        Archive -              Permite comprimir e extrair arquivos compactados
        Autoilt -              Para interegair com software desenvolvidos para windows
        Sikuli -               Interação com elementos da interfaec através de reconhecimento de imagens
        Requests -             Realizar requisições em APIs REST
        MongoDB -              Interage com o banco de dados MongoDB
        Database -             Interações com banco de dados SQL
        Debug -                Pausa execução e permite interação em tempo real com o código via terminal
        SapGui -               Para automação de softwares SAP
        Suds -                 Realiza requisições webservices padrão SOAP

Dicas de utilização da FakerLibrary

    *** Settings ***
    Library    FakerLibrary    locale=pt_BR

    *** Test Cases ***
    Imprime exemplos de utilidades da library FakerLibrary
    Exemplos relacionados a pessoa
    Exemplos relacionados a datas
    Exemplos diversos

    *** Keywords ***
    Exemplos relacionados a pessoa
    ${NOMEFAKE}                 FakerLibrary.Name
    ${ENDERECOFAKE}             FakerLibrary.Address
    ${TELEFONEFAKE}             FakerLibrary.Phone Number
    ${CIDADEFAKE}               FakerLibrary.City
    ${CODIGOPOSTALFAKE}         FakerLibrary.Postalcode
    ${TRABALHOFAKE}             FakerLibrary.Job
    @{PESSOA}                   Create List    Nome Aleatório: ${NOMEFAKE}  Endereço Aleatório: ${ENDERECOFAKE}
    ...                         Telefone Aleatório: ${TELEFONEFAKE}  Cidade Aleatória: ${CIDADEFAKE}
    ...                         CódigoPostal Aleatório: ${CODIGOPOSTALFAKE}   Trabalho: ${TRABALHOFAKE}
    Log Many    @{PESSOA}

    Exemplos relacionados a datas
    ${DATAFAKE}                 FakerLibrary.Date
    ${MESFAKE}                  FakerLibrary.Month
    ${ANOFAKE}                  FakerLibrary.Year
    ${DIADASEMANAFAKE}          FakerLibrary.Day Of Week
    ${DIADOMESFAKE}             FakerLibrary.Day Of Month
    @{DATAS}                    Create List    Data Aleatória: ${DATAFAKE}  Mês Aleatório: ${MESFAKE}  Ano Aleatório: ${ANOFAKE}
    ...                         Dia da Semana Aleatório: ${DIADASEMANAFAKE}   Dia do Mês Aleatório: ${DIADOMESFAKE}
    Log Many    @{DATAS}

    Exemplos diversos
    ${EMAILFAKE}                FakerLibrary.Email
    ${PASSWORDFAKE}             FakerLibrary.Password
    ${CORFAKE}                  FakerLibrary.Color Name
    ${CARTAODECREDITOFAKE}      FakerLibrary.Credit Card Number
    ${PALAVRAFAKE}              FakerLibrary.Word
    @{OUTROS}                   Create List    E-mail Aleatório: ${EMAILFAKE}   Senha Aleatória: ${PASSWORDFAKE}
    ...                         Cor Aleatório: ${CORFAKE}   Cartão de Crédito Aleatório: ${CARTAODECREDITOFAKE}
    ...                         Palavra Aleatória: ${PALAVRAFAKE}