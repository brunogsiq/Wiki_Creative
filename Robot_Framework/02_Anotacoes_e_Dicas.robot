*** Comments ***

Nesta parte poderemos realizar comentários que não irão interferir no código.
    Para realização dos comentários é necessario abrir a seção comments 
        Podemos realizar um comentário durante a produção adicionado a #
            Caso haja necessidade de comentar diversas linhdas de uma vez, utiliza-se o atalho ctrl+;

Quando for necessário mapear um elemento web, deve-se priorizar na seguinte escala:
    ID > NAME > CLASS > Xpath > Css Selector


Os teste serão escritos utilizando o seguinte padrão de idenficação:
    #Nº  - Sistema - Tela - Cenáro de Teste - Caso de Teste (Objetivo do mesmo)

Todo arquivo deverá conter a seção *** Setting ***,
    Porém cada seção será responsálve por uma maneira diferente de abranger estar informações de configuração.

As Libraries sempre serão inseridas na seção *** Settings **** dentro do arquivo Resource(s). 
    Após, o arquivos de nome Resource(s) deverá ser inserido em cada arquivo de cenário de teste.

A seção de *** Keywords ***, responsávei pela ação daquilo que foi escrito como uma etapa de teste (*** Test Case ***),
    deverão ser alocadas no arquivo Resource(s)

A seção de *** Variables *** poderá ser um arquivo a parte dos Test Case, Resorce, Porém,
    NÃO esquecer que todos os cenários de teste e arquivos que de alguma forma utilizare variáveis,
        será necessário realizar a chamada do arquivo através do comando Resource.

Uma suíte para o Robot, será um arquivo .robot , consequentemente um cenário de teste, é um caso dentro do *** Test Case ***