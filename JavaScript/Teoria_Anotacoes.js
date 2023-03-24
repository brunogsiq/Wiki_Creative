/* 
Parte II

1. Variáveis e constantes 

https://www.youtube.com/watch?v=KG1uwe6QnSQ

1.1 Tipos Primitivos

https://www.youtube.com/watch?v=a1NiHwH9clE    

string: 
    var empresaCurso "trybe";
number: 
    var numero1 = 2022;
    var numero2 = 2022.2021
bool: 
    var aprovadoCurso = "true" or "false";
const:   
    const PI = 3.14;
    const duracaoMaxima = "12 meses";
typeof nomeDaVar 
    este comando irá verificar o tipo de variável que está sendo inserida.    

Ps: let ou var, ambos declaram variável, porém, há diferenças;

-------------------------------------------------------------------------------

Parte III

2. Operadores aritméticos;
5 + 5
5 - 3
5 * 2
5 / 5
2 ** 3 = 8 (Elevado ao cubo, ou seja, exponenciação)
10 % 2 = 0 (Módulo)

Exemplo:
var salario = 1500.00;
var aumento = 1000.00;
salario = salario + aumento ;


3. Operadores de comparação;
>; >=; <; <=; ===; !==;

4. Operadores lógicos;
AND: &&
OR : ||

5. Estrutura condicional if/else

E é chegado o momento mais esperado desta parte do conteúdo. 
Vamos aprender algo que você vai utilizar com muita frequência ao longo de toda sua carreira: 
as famosas estruturas condicionais .

Se está frio e chovendo, então Netflix, senão , praia.

*if () {

}else if () {

}else  {

}

6. Arrays 

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

7. String´s
É uma sequência de caracteres. Podem ser concatenadas.

ps: console.log("mensagem");

8.Estruturas de repetição

for( ;  ; ++){

}

Exemplo:
function converteStringParaArray(frase) {

var resultado = []

for(var index = 0; index < frase.length; index++) {
    resultado.push(frase[index])
}
return resultado;
}


8. Funções

function nomeDaFuncao (parametro1, parametro2, ...){
    
}

nomeDafuncao (10 , 20 );

function nomeDaFuncao (parametro1, parametro2, ...){
    console.log(parametro1);   
    console.log(parametro2);

    return; 
}

function imprimeSaudacao (nome){
    console.log("Olá, "+ nome +"!" );
} 

function somaDoisElementos(elementoA, elementoB){
    var soma;
    soma = elementoA + elementoB;    
    
    return soma;
}

nomeDaFuncao();

parse.Float(); Fará com que transformemos números inseridos no input com vírgula;
*/

var statusCarro = "desligado";
var aceleracao = 0;

function ligarDesligar() {
    if (statusCarro === "desligado") {
        statusCarro = "ligado"
    } else {
        statusCarro = "desligado";
    }

    return statusCarro;
}

function acelerar(incremento) {
    aceleracao = aceleracao + incremento;

    return "Acelerando a " + aceleracao + "m/s²";
}

function frear(decremento) {
    aceleracao = aceleracao - decremento;

    return "Desacelerando para " + aceleracao + "m/s²";
}

function girarVolante(anguloDeRotacao) {
    rotacaoDoVolante = anguloDeRotacao;
    return rotacaoDoVolante + "º";
}

function calculaIMC(altura, peso) {
    var IMC;
    IMC = peso / (altura * altura);

    return IMC;
}


/*Anotações envolvidas com HTML*/
/*
<meta charset="utf-8">
    <br>o < meta charset="utf-8" > fará com que o navegador inteprete a cadeia de caracteres, incluindo acentuação entre outras pontuações.
        <br>
            <h1>Meu primeiro teste!</h1>
            <br>	A tag h1 foi inserida no título acima,
                <br>		vai servir para que nosso texto ganhe um destaque. (Heading = destaque)
                    <br>			Tambeém será utilizada entre os sinais de < e > e no fim deveremos fechar utilizando a barr ficando assim: < />
                        <br>
                            <br>br entre os sinais de < e > vai servir para pularmos linha.
                                <br>
                                    <br>Seria isto um programa?
                                        <br>	Vamos descobrir utilizando a tag de âncora assim: <a href="https://linktr.ee/brunogsiq">Link</a>
                                            <br>		Ou seja, utilizando as tag´s < a > e < / a >, fazemos a ligação e criar link´s que irão nos direcionar para um site.
                                                <br>			As Tag´s indicam instruções especiais a serem interpretadas;
                                                    <br>
                                                        <br>Porém, o HTML é estático, é uma linguagem de marcação,
                                                            <br>	para resolvermos este nosso problema utilizaremos Java Script,
                                                                <br>		tornando nosso curos mais dinâmico;
                                                                    <br>			O pop up exibido inicialmente é por termos programado o script abaixo no código:
                                                                        <br>
                                                                            <br>
                                                                                <script>

                                                                                    alert("Isso sim se tornará um programa em algum momento");
                                                                                    document.write("Para realizarmos comentários dentro do código, utilizaremos a sintaxe //, e tudo inserio após o // será ignorado e não mostrado pelo código. F12 para visualizar<br><br>");
                                                                                        //Comentário inserido e ignorado.
                                                                                        document.write("A minha idade é: ");
                                                                                        document.write("35");
                                                                                        document.write("A minha idade é: ");
                                                                                        document.write("<br>");
                                                                                            document.write("3"+"5");

                                                                                        </script>
                                                                                        <br>
                                                                                            <script>

                                                                                                var ano = 2022;

                                                                                                document.write("Bruno tem " + (ano - 1986) + " anos.");

                                                                                            </script>
                                                                                            <br>
                                                                                                <script>

                                                                                                    var idade1 = 50;
                                                                                                    var idade2 = 68;
                                                                                                    var idade3 = 72;
                                                                                                    var media = (idade1 + idade2 + idade3) / 3;

                                                                                                    document.write("A media das idade é: " + Math.round(media) + " .");

                                                                                                </script>
                                                                                                <br>
                                                                                                    <br>
                                                                                                        <h3> Álcool ou Gasolina ? </h3>
                                                                                                        <script>

                                                                                                            var caminhoGasolina = 480;
                                                                                                            var caminhoAlcool = 300;
                                                                                                            var tanqueCarro = 40;
                                                                                                            var consumoGasolina = caminhoGasolina / tanqueCarro;
                                                                                                            var consumoAlcool = caminhoAlcool / tanqueCarro;

                                                                                                            document.write("O consumo de Gasoline é: "+ consumoGasolina + " Km/L.");
                                                                                                            document.write("<br><br>");
                                                                                                                document.write("O consumo de Gasoline é: "+ consumoAlcool + " Km/L.");

                                                                                                            </script>
                                                                                                                <br>
                                                                                                                    <br>
                                                                                                                        <script>

                                                                                                                            var pularUmaLinha = "<br>";
                                                                                                                                var pularDuasLinha = "<br><br>";

                                                                                                                                    document.write("Para eu realizar mais facilmente a manutenção do código, posso inserir uma variável com nome pularLinha, e automaticamente configurar a mesma para pular o número de linhas que eu desejar, assim, imaginando que posso obter um código imenso, isso faria com que eu tivesse maior agilidade de manutenção.");
                                                                                                                                    document.write(" Exemplo 1:" + pularUmaLinha + "Pulei 1 linha" + pularUmaLinha);
                                                                                                                                    document.write("Exemplo 2:" + pularDuasLinha + "Pulei 2 linhas" + pularDuasLinha + "Viu?!.");

                                                                                                                                </script>
                                                                                                                                    <br>
                                                                                                                                        <br>
                                                                                                                                            <script>

                                                                                                                                                function pularLinha1(){

                                                                                                                                                    document.write("<br>");

	}

                                                                                                                                                function pularLinha2() {

                                                                                                                                                    document.write("<br><br>");

	}

                                                                                                                                                document.write("Acima ficou legal, mas podemos melhorar, assim, vamos aprender a declarar nossa primeira função, a mesma deve ser escritar antes das próximas instruções, ou seja, início do código.");
                                                                                                                                                pularLinha1();
                                                                                                                                                document.write("Como dica, sempre utilize o nome da função um verbo, pois sempre a função terá como objetivo a realização de uma ação dentro do código.")
                                                                                                                                                pularLinha2();
                                                                                                                                                document.write("Testes estão aqui mesmo nesta parte do código, utilize F12 para visualizar.");

                                                                                                                                            </script>
                                                                                                                                            <br>
                                                                                                                                                <br>
                                                                                                                                                    <script>

                                                                                                                                                        document.write("Podemos utilizar outro macete. Ao invés de sempre ficarmos escrevendo document.write; <br>Podemos também inseri-lo em uma função e o chamarmos através de um comando menor. Função e teste abaixo.")

                                                                                                                                                            function chamarDW(frase){
                                                                                                                                                                pularLinha2();
                                                                                                                                                            document.write(frase);
                                                                                                                                                            pularLinha2();
	}

                                                                                                                                                            chamarDW("BrunoGSiqueira");
                                                                                                                                                    </script>
                                                                                                                                                    <br>
                                                                                                                                                        <br>
                                                                                                                                                            <script>

                                                                                                                                                                chamarDW("Exemplo legal para configurar alerta, é pós o programa em funcionanamento, façamos o seguinte cálculo");

                                                                                                                                                                function exibirAlerta(frase){

                                                                                                                                                                    alert("***" + frase + "***");

	}

                                                                                                                                                                var idade1 = 34;
                                                                                                                                                                var idade2 = 16;
                                                                                                                                                                var idade3 = 40;
                                                                                                                                                                var totalIdades = idade1 + idade2 + idade3;
                                                                                                                                                                var mediaIdade = totalIdades/3;

                                                                                                                                                                exibirAlerta(mediaIdade);

                                                                                                                                                            </script>
                                                                                                                                                            */