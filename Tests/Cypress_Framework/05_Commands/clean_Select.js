/*
    cy.get("#seu-campo")  // Seletor do campo
    .clear()  // Limpa o conteúdo do campo
    .type("Sua informação inserida")  // Insere a informação desejada
    .should("have.value", "Sua informação inserida")  // Verifica se a informação foi inserida corretamente
    .type("{selectall}{backspace}")  // Seleciona e apaga a informação inserida
    .should("have.value", "")  // Verifica se o campo está vazio após apagar a informação
*/