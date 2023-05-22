*** Comments ***

Outras dicas e anotações sobre robot framework - https://docs.google.com/document/d/1UbOEulez9E698tb8Z68ZRFD0XPNQ19-MTlrcO-8_tRg

Instalando o Robot:
    Será necessário instalar o python e adicionar o mesmo a variável de ambiente, então, quando for instalar, selecione a opção add ao path.
        Porém, caso não dê certo, poderá adicionar manualmente a váriavel de ambiente através das configurações do windows
        Após fazer instalar do python, será necessário instalar algumas bibliotecas.
            A mais usada é a SeleniumLibrary, então, após abrir o cmd poderemos instalar algumas coisas através do comando
                pip install robotframework
                pip install robotframework-SeleniumLibrary
                pip install robotframework-DebugLibrary
                pip install robotframework-Browser
            Para verificar a lista de bibliotecas instaladas utilize o comando:
                pip list
            Talves seja necessário instalar o pip caso o python não instale automaticamente, porém é raro esta situação.
                e também talvez seja necessário atualizar o pip, assim, quando utilizar o comanodo pip install robotframework, 
                havendo esta necessidade, o mesmo mostrará o comando que deverá ser utilizado.
    Será necessário fazer o download do chromiumdriver, que poderá ser baixado utilizando este nome em um navegador.
        Após download e descompactação, o mesmo deverá ser inserido na pasta system32.
            Atenção, a versão do chromiumdriver deve ser igual ou menor que a sua versão do chrome(navegador),
                para verificar sua versão, nas configurações do chrome, poderá ver em sobre.
    Utilizando o vscode, deveremos realizar a instalação da extensão do python, robot Framework.

    Após realizar as instalações pode visualizar através do cmd.
    Ex:
    python --version
    pip --version

Havendo necessidade de recorrer a comandos do framework, aqui vão alguns:
    robot --help         = mostra a lista com todos os comando do Robotframework
    robot -d 			=  (comando de outputs)
    robot -d./log "titulo".robot   = cria o log dentro da pasta log
    robot -d./log -i "nome do teste da tag criada" "titulo".robot   = O "-i" inclui apenas o testes selecionado coma tag
    robot -i			= Para executar apenas uma Tag expecifica 
    robot -e			= Para excluir, não executar os testes com a Tag expecifica 
    robot -d			= criar uma pasta e joga os arquivos gerado dentro dela  
    robot -v			= substitui uma variavel apenas naquela execução do teste (depois volta a ser como antes, o mesmo valor anterior) 

 Para remover Warnings do ChromeDrive:
     options=add_experimental_option('excludeSwitches',['enable-logging'])