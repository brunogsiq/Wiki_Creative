/*
    É importante observar os requisitos funcionais, ou seja, àqueles que estarão vinculados ao uso da aplicação.

    Direcionado aos testes de performance, deve-se abordar:
        Prevenção de problemas;
        Necessidade da arquitetura atender as necessecidades do cliente;

    O que seria um teste de performance
        Testar o desempenho da aplicação, e entender se o mesmo encontra-se desejável, ou aceitável.
        Lembramos que o teste que abordamos é um teste NÃO funcional.
        Com isto, o teste de performance poderá ir além apenas do que diz seu nome, ou seja:
            Desempenho;
            Capacidade;
            Confiabilidade;
            Disponibilidade;
            Escalabilidade;
            Resiliência;

    Sobre os tipos de testes de performance, poderemos evidenciar:
        Carga ou volume;
            Ex: a carga normal de usuário é 100, façamos um teste com 400 usuários utilizando a aplicação.
        Capacidade;
            Ex: o mesmo exemplo acima, com um plus, validado em um determinado tempo.
        Stress;
            Ex: estrapolando valores de carga da aplicação a cada determinado espaço de tempo.
        Escalabilidade;
            Ex: avaliação e a capacidade do sistema expandir-se
        Pico:
            Ex: picos de utilização da aplicação em um determinado horário ou por um determinado motivo.
        Resistência:
            Ex: avaliação do comportamento em períodos mais longos;
                degradação da performance;
                falhas;
                interrupções;

    Quais métricas poderão ser utilizadas:
        Tempo de resposta;
        Trhoughput;
        Latência;
        Bytes;
        Utilização de recursos;

    Frameworks:
        JMeter:
            p/ adicionar massa de dados, clicar na opção Test Plan com botão direito, 
                add > config element > csv data set config > filename > browser

            Na seção Thread group, é realizada toda configuração de carga do teste.
*/