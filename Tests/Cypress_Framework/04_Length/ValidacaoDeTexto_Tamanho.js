/*
cy.get("caminho").each(($elemento) => {
  cy.wrap($elemento)
    .invoke("text")
    .then((elementoText) => {
      expect(elementoText.length).to.equal(18);
    });
});

*/