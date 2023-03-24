*** Comments ***

Em *** Variables *** serão inseridas as váriaeis utilizadas no projeto, poderão ou não ter valor agregado as mesmas.
    As variáveis deverão ser inseridas dentro do comando ${nomeDaVariavel}, como mostra o exemplo.
    Ex01:
    *** Variables ***
    ${NOME_DA_VARIAVEL1}    Valor Agregado a Variavel
    ${NOME_DA_VARIAVEL2}    etapa02

Tipos de variáveis
    ${SIMPLES_STRING}       nome
    ${SIMPLES_NUMERICA}     1910
    ${SIMPLES_BOOLEANA}     ${TRUE}
    @{LISTA}                [cliente_01]    [produto_02]    [time_03];
    &{DICIONARIO}           nome=Bruno    email=teste@teste.com.br    idade=35

Posso realizar um teste validando somente váriaveis locais e não globais, ou seja, as váriaveis não estarão especificadas no arquivo de Variables
    Ex:
    *** Test Case ***
    02.0 - [Web] - [Home Page] - Acesso ao menu de eletrônicos.
    [Documentation]    Este teste realiza a verificação do menu eletrônicos do site "https://www.amazon.com.br",
    ...                e também realizar a verificação da categoaria "Computadores e Informática".
    [Tags]             menus    categorias
    Log to console    ${EMPTY}
    Dado que desejo acessar o menu eletrônicos,
    Quando clicar na opção Eletrônicos do menu,
    Então o sistema deve redirecionar para a página e verificar o título "Eletrônicos e Tecnologia".

    *** Keywords ***
    Dado que desejo acessar o menu eletrônicos,
    Dado que desejo a acessar a url padrão do projeto,
    Quando inserir o link disponibilizado,
    Então o sistema deve apresentar a tela home page.
Quando clicar na opção Eletrônicos do menu,
    Click Element                    ${MN_Eletrônicos}
    Wait Until Element Is Visible    ${TTL_MN_Eletronicos}
    Wait Until Page Contains         ${TXT_MN_Eletronicos}
    Então o sistema deve redirecionar para a página e verificar o título "${TXT_MN_Eletronicos}".
    Title Should Be                  ${TXT_MN_Eletronicos}

    O que aconteceu de fato? As palavras que estao entre aspas são validadas apenas neste caso de teste substituindo o que vem de Test Case para Keywords.
        Lembrando que é necessário utilizar a posição correta.

Outro Exemplo:

    *** Variable ***
    &{PESSOA}       nome=May Fernandes   email=mayfernandes@exemplo.com.br   idade=20   sexo=feminino

    *** Test Cases ***
    Caso de teste de exemplo 01
        Uma keyword qualquer 01

    *** Keywords ***
    Uma keyword qualquer 01
        Uma subkeyword com argumentos   Bruno Silva   bruno_silva@teste.com.br
        Uma subkeyword com argumentos   ${PESSOA.nome}   ${PESSOA.email}
        ${MENSAGEM_ALERTA}   Uma subkeyword com retorno   ${PESSOA.nome}   ${PESSOA.idade}
        Log     ${MENSAGEM_ALERTA}

    Uma subkeyword com argumentos
        [Arguments]     ${NOME_USUARIO}   ${EMAIL_USUARIO}
        Log             Nome Usuário: ${NOME_USUARIO}
        Log             Email: ${EMAIL_USUARIO}

    Uma subkeyword com retorno
        [Arguments]     ${NOME_USUARIO}   ${IDADE_USUARIO}
        ${MENSAGEM}     Set Variable If    ${IDADE_USUARIO}<18    Não autorizado! O usuário ${NOME_USUARIO} é menor de idade!   OK!Usuário é maior de idade!
        [Return]        ${MENSAGEM}

Outro Exemplo:
    *** Variable ***
    #Simples
    ${SIMPLES}   Vamos ver os tipos de variáveis no robot!

    #Tipo Lista (arrays) - separar itens com espaço duplo
    @{FRUTAS}    morango   banana   maça   uva   abacaxi

    #Tipo Dicionário (chave=valor) - separar cada chave=valor com espaço duplo
    &{PESSOA}    nome=May Fernandes   email=mayfernandes@exemplo.com.br   idade=28   sexo=feminino

    *** Test Cases ***
    Caso de teste de exemplo 01
        Uma keyword qualquer 01

    *** Keywords ***
    Uma keyword qualquer 01
        # Lendo um valor Simples
        Log    ${SIMPLES}

        # Lendo um item de uma Lista
        Log    Essa tem que ser maça: ${FRUTAS[2]} e essa tem que ser morango: ${FRUTAS[0]}

        # Lendo chaves de um Dicionário
        Log    Nome: ${PESSOA.nome} e email: ${PESSOA.email}