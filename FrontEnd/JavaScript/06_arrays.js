/*
são estruturas utilizadas para armazenar múltiplos valores em uma única variável.

Exemplo1: var cores = ["Verde", "Vermelho", "Amarelo"];

Índice serão os números de informações dentro do array, iniciando em zero;

comando Push : adiciona informaçção.

*nomeDaVar.push("Dado");
*nomeDaVar.length; - No exemplo um vai mostrar 5, pois a função é mostrar quantos
dados temos dentro do array. 
Usa-se muito para saber a última posição do array, havendo duas formas:
*nomeDaVar[5], caso eu conheça o tamanho;
*nomeDaVar[nomeDaVar.leght -1];

const arr = [1, 2, 3];
  
expect(arr).to.have.members([1, 2, 3]);
expect(arr).to.have.include.members([1, 3]);
expect(arr).to.not.be.empty;
expect([]).to.be.empty;
*/