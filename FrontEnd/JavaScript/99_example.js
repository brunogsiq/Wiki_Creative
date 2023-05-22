/*
Anotações envolvidas com HTML
    <meta charset="utf-8">
/*
    meta charset=utf-8 fará com que o navegador inteprete a cadeia de caracteres, incluindo acentuação entre outras pontuações.
*/
/*
    <h1>Meu primeiro teste!</h1> 
    A tag h1 foi inserida no título acima, servir para que nosso texto ganhe um destaque. (Heading = destaque)
    <br>Tambeém será utilizada entre os sinais de < e > e no fim deveremos fechar utilizando a barra ficando assim: < />
*/
/*
    <br> entre os sinais de < e > vai servir para pularmos linha ou </br>
    Vamos descobrir utilizando a tag de âncora assim: <a href="https://linktr.ee/brunogsiq">Link</a>
    Ou seja, utilizando as tag´s < a > e < / a >, fazemos a ligação e criar link´s que irão nos direcionar para um site.
    As Tag´s indicam instruções especiais a serem interpretadas;
    Porém, o HTML é estático, é uma linguagem de marcação,
    para resolvermos este nosso problema utilizaremos Java Script, tornando nosso curos mais dinâmico;
    O pop up exibido inicialmente é por termos programado o script abaixo no código:
*/
/*
    <script>
    alert("Isso sim se tornará um programa em algum momento");
    document.write("Para realizarmos comentários dentro do código, utilizaremos a sintaxe //, e tudo inserio após o // será ignorado e não mostrado pelo código. F12 para visualizar<br><br>");
        //Comentário inserido e ignorado.
        document.write("A minha idade é: ");
        document.write("35");
        document.write("A minha idade é: ");
        document.write("</br>");
            document.write("3"+"5");
    <br>
    var ano = 2022;
    document.write("Bruno tem " + (ano - 1986) + " anos.");
    </br>
    var idade1 = 50;
    var idade2 = 68;
    var idade3 = 72;
    var media = (idade1 + idade2 + idade3) / 3;
    document.write("A media das idade é: " + Math.round(media) + " .");
    <br></br>
    <h3> Álcool ou Gasolina ? </h3>
    var caminhoGasolina = 480;
    var caminhoAlcool = 300;
    var tanqueCarro = 40;
    var consumoGasolina = caminhoGasolina / tanqueCarro;
    var consumoAlcool = caminhoAlcool / tanqueCarro;
    document.write("O consumo de Gasoline é: "+ consumoGasolina + " Km/L.");
    document.write("<br></br>");
    document.write("O consumo de Gasoline é: "+ consumoAlcool + " Km/L.");
    <br></br>
    var pularUmaLinha = "<br></br>";
    var pularDuasLinha = "<br></br>";
    document.write("Para eu realizar mais facilmente a manutenção do código, posso inserir uma variável com nome pularLinha, e automaticamente configurar a mesma para pular o número de linhas que eu desejar, assim, imaginando que posso obter um código imenso, isso faria com que eu tivesse maior agilidade de manutenção.");
    document.write(" Exemplo 1:" + pularUmaLinha + "Pulei 1 linha" + pularUmaLinha);
    document.write("Exemplo 2:" + pularDuasLinha + "Pulei 2 linhas" + pularDuasLinha + "Viu?!.");
    <br></br>
    function pularLinha1(){
        document.write("<br>")
    },
    function pularLinha2() {
        document.write("<br><br>")
    },
    document.write("Acima ficou legal, mas podemos melhorar, assim, vamos aprender a declarar nossa primeira função, a mesma deve ser escritar antes das próximas instruções, ou seja, início do código.");
    pularLinha1();
    document.write("Como dica, sempre utilize o nome da função um verbo, pois sempre a função terá como objetivo a realização de uma ação dentro do código.")
    pularLinha2();
    document.write("Testes estão aqui mesmo nesta parte do código, utilize F12 para visualizar.");
    <br></br>
    document.write("Podemos utilizar outro macete. Ao invés de sempre ficarmos escrevendo document.write; <br>Podemos também inseri-lo em uma função e o chamarmos através de um comando menor. Função e teste abaixo.")
    function chamarDW(frase){
        pularLinha2(),
        documemt.write(frase),
        pularLinha2()
    },
    chamarDW("BrunoGSiqueira");
    <br></br>
    chamarDW("Exemplo legal para configurar alerta, é pós o programa em funcionanamento, façamos o seguinte cálculo");
    function exibirAlerta(frase){
        alert("***" + frase + "***")
    }
    var idade1 = 34;
    var idade2 = 16;
    var idade3 = 40;
    var totalIdades = idade1 + idade2 + idade3;
    var mediaIdade = totalIdades/3;
    exibirAlerta(mediaIdade);
    </script>
*/