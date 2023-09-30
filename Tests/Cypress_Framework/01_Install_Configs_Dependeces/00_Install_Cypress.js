/* 
Para realizar a instalação do Cypress é necessário ter o Node.js instalado
    Após instalação e ciente de que estão configurados na váriaveis de ambiente, 
        Utilizaremos o terminal de comando para instalação.

Para iniciar o projeto, será necessário abrir uma pasta, e utilizando o VsCode, navegar até a mesma.
    utilizaremos o comando
        npm init --yes - responde sim a todas as perguntas feitas em um projeto Node.js
        ou
        npm init para responder detalhamentos do projeto.
            Obs:As configurações posteriores são perguntas em tese sem importância pois não definição no momento,
                Porém nestas configurações quando perguntar test command: inserir npx cypress open

Utilizando o seguinte comando:
            npm install cypress --save -include=dev

Para verificar a versão do mesmo, será digitado no prompt de comando o seguinte comando
    npm -v
        Para verificação do node package manager
    node -v 
        Para verificação do node.js

Após será necessário instalar o cypress e suas dependências dentro do projeto através do comando:
    npm i cypress --save

Para rodar nossos testes utilizando a interface gráfica do do cypress será utilizado o comando:
    npx cypress open
    or
    npx cypress run

Para rodar e executar os testes do cypress em backgroud", o comando utilizado será:
    npx cypress run

Possíveis erros e suas correções:
    Erro:
        Could not find a Cypress configuration file in this folder:
    Correçâo:
        npx cypress open --config-file theNewCypressConfigPath
    */