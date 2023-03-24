#include <stdio.h>      //é Necessário para usar a função printf e scanff;
#include <stdlib.h>
#include <math.h>      // Biblioteca usada para que os comandos pow(x,2) e sqrt() possam ser utilizados;

///para apenas uma linha de comentário , utiliza-se: ///

/// Para comentário maiores, que se deseja pular linhas, ou ter um texto maior utiliza-se: /* ...comentario... */

//caso queira pular duas linhas seguidamente, coloca-se \n\n , assim o código pulará para as duas próximas...

/*
        ***TEORIA, DETALHES, ENTRE OUTRAS CARACTERÍSTICAS DA LINGUAGEM C;

    • Um programa em C é composto por um conjunto de Funções. A função pela qual o programa começa a ser executado chama-se main.
    • Após cada cada comando em C deve-se colocar um ; (ponto-e-vírgula).
    • Um programa em C deve ser Identado para que possa ser lido com mais facilidade.
    • A partir do segundo caracter pode conter letras, números e underscore;
    • Deve-se usar nomes significativos dentro do contexto do programa;
    • C é uma linguagem case-sensitive, ou seja, faz diferença entre nomes com letras maiúsculas e nomes com letras minúsculas. 
            Peso   e  peso são diferentes;
    • Costuma-se usar maiúsculas e minúsculas para separar palavras: "PesoDoCarro";
    • Deve ser diferente dos comandos da linguagem;
    • Deve ter no máximo 31 caracteres (no caso do TurboC);
    • Pode conter números a partir do segundo caracter;
    • Exemplos:
                Idade, Contador, PesoDoCarro, Usuario_1, CorDaPagina, RaioDoCirculo;

        ***VARIAVEIS;

    Uma variável é uma possição de memória que pode ser identificada através de um nome.
    Podem ter seu conteúdo alterado por um comando de atribuição.
    Após a atribuição mudam de valor.
    int a,b, SomaGeral;
    a = 3; // a recebe o valor 3
    b = a * 2; // b recebe o dobro do valor de a
    c = a + b + 2; // c recebe 11

        ***TIPOS DE VARIÁVEIS;

    • Todas as variáveis em C tem um tipo;
    • Cada tipo define os valores que a variável pode armazenar;
    • Cada tipo ocupa uma certa quantidade de nemória;

    int = numeros inteiro;
    float = 1000000 = numeros com vírgula;  - ocupa menos espaço na memória que double, até 6 dígitos de precisão;
    double = 100.00 =  números com vírgula; - ocupa mais espaço na memória que float, até 10 dígitos de precisão;
    char nome = 'a', 'b', 'H', '^', '*', '1', '0' = utiliza-se apenas um caractere;
    char nome[10] = "paralelepipedo" = pode ser utilizado mais que um caractere e utiliza-se dentro de aspas duplas: "..." ;

        ***VARIÁVEL TIPO STRING;
    Uma variável capaz de arrmazenar uma string deve ser declarada informando-se qual o número máximo de caracteres que ela poderá armazenar.
    Exemplo:
        char Nome[30];  // isto define que a variável poderá armazenar uma string de até 29 caracteres.
    Ao trabalharmos com strings deve-se incluir o arquivo de cabeçalho #include <string.h>

        ***DECALRAÇÃO DE VARIÁVEIS;

    • Todas as variáveis tem que ser declaradas antes de serem usadas;
    • Não há uma inicialização implícita na declaração

        ***EXEMPLOS DE PROGRAMAS EM C;

    #include <stdio.h>                          :Cabeçalho, composto pela biblioteca do C;

    void main()
    {
       int contador;                            :declarações de variáveis simples;
       float PrecoDoQuilo;
       double TaxaDeCambio;
       char LetraDigitada;
       int IdadeManoel, IdadeJoao, IdadeMaria;  :Pode colocar mais de uma variável na mesma linha;
       double  TaxaDoDolar,
               TaxaDoMarco,
               TaxaDoPeso,                      :Também pode trocar de linha no meio;
               TaxaDoFranco;
    .......
    }
 
        ***CONSTANTE;

    Constantes são identificadores que não podem ter seus valores alterados durante a execução do programa;

        ***OPERADORES ARITMÉTICOS;
    - sinal de subtração;
    + sinal de soma
    * multiplicação;
    / divisão;
    % módulo (resto da divisão);
     
    + e - possuem prioriadade menores na equação do que * e / ;

    PARA ALTERAR COR DE LETRA USA-SE A BLBLIOTECA <conio.h> PARA NUMEROS: system ("color xy"), onde x= BACKGROUND e Y=Texto :
    15 = Branco brilhante, 14 = Amarelo claro, 13 = Lilás, 12 = Vermelho claro, 11 = Verde-água claro
    10 = Verde claro, 9 = Azul claro, 8 = Cinza, 7 = Branco, 6 = Amarelo,
    0 = Preto, 1 = Azul,  2 = Verde,  3 = Verde-água, 4 = Vermelho, 5 = Roxo,

*/


int main(){ //CORPO DO ALGORÍTMO SE INICIA POR AQUI;

    // EXEMPLOS DE VARIAVEIS;
    char nome;          // char, tera como valor apenas um caractere, o valor atribuído deve ser colocado entre aspas simples: '...';
    char nome2[10];     // neste caso, dados a característica de string, embora em LINGUAGEM C, não exista string;
    int idade;          // int, colocando 1 OU 1.90, utilizará o número somente parte inteira;
    float altura;       // float, colocando 1 OU 1.90, utilizará o número como inserido;
    double peso;

    nome = 'B';
    nome2[10] = 'Bruno';      //colocando valor fixo a variável;
    idade = 31;              //colocando valor fixo a variável;
    altura = 1.90;          //colocando valor fixo a variável;
    peso = 70.00;          //colocando valor fixo a variável;

    //EXEMPLOS DE MENSAGENS IMPRESSAS NA TELA;
    printf("Ola Tudo bem?\n\n");                                //NÃO HÁ ENTRADA DE DADOS, SOMENTE SAÍDA DE MENSAGEM;
    printf("Espero que sim, entao sigamos;\n\n");               //NÃO HÁ ENTRADA DE DADOS, SOMENTE SAÍDA DE MENSAGEM;
    printf("Por Favor, indentifique-se, escreva seu Nome\n\n"); //NÃO HÁ ENTRADA DE DADOS, SOMENTE SAÍDA DE MENSAGEM;
    printf("Por Favor, agora escreva seu Sobrenome\n\n");       //NÃO HÁ ENTRADA DE DADOS, SOMENTE SAÍDA DE MENSAGEM;

    printf("xxxxxxxxxxxxx\n");       //NÃO HÁ ENTRADA DE DADOS, SOMENTE SAÍDA DE MENSAGEM;
    printf("  xxx     xxx\n");
    printf("  xxx     xxx\n");
    printf("  xxx     xxx\n");
    printf("  xxxxxxxxxxxxx\n");
    printf("  xxx      xxxx\n");
    printf("  xxx      xxxx\n");
    printf("  xxx      xxxx\n");
    printf("xxxxxxxxxxxxxxx\n\n");     //NÃO HÁ ENTRADA DE DADOS, SOMENTE SAÍDA DE MENSAGEM;

    printf("Meu Primeiro Programa\n");    // printf = Escreve na tela do programa aquilo que eu quero que apareça;
    printf("Meu Segundo Programaan");    // printf = Escreve na tela do programa aquilo que eu quero que apareça;
    printf("Meu Terceiro Programa\n");  // \n  = Pula uma linha para escrever o próximo comando, caso contrário, ficará tudo na mesma linha;
    printf("Meu Quarto Programa\n");   // \n, fazendo de exemplo entre a terceira e quarta linhas do código;

    //EXEMPLOS DE SAÍDA DE DADOS;
    int valor, dobro, triplo, quadrado;

    valor = 3;
    dobro = valor*2;
    triplo = valor*3;
    quadrado = pow(3,2);

    printf("\n\nO VALOR DA VARIAVEL \"Valor\" EH: %d.\nO VALOR DA VARIAVEL \"Dobro\" EH: %d.\nO VALOR DA VARIAVEL \"Triplo\" EH: %d. \nO VALOR DA VARIAVEL \"Quadrado\" EH: %d. \n"  , valor, dobro, triplo, quadrado);

    int C=1910;

    printf("\nO VALOR DE C EH: %d.\n",C);
    printf("\nO VALOR DA VARIAVEL C X 2 EH: %d.\n", C*2);
    printf("\nO VALOR DA VARIAVEL C X 3 EH: %d. \n", C*3);
    printf("\nO VALOR DA VARIAVEL C X C EH: %f. \n", pow(C,2));

    //EXEMPLO DE ENTRADA E SAÍDA DE DADOS
    // scanf(" %... ", &...); Estrutura do comando scanf, onde dentro do parentes tera %c ou %d ou %f ou %s e ao lado do & será o nome da variável;
    int x,y;
    float r1, r2;

    printf("\nDigite um valor inteiro: ");
    scanf("%d", &x);
    printf("\nDigite um valor inteiro: ");
    scanf("%d", &y);
    printf("\nO valor digitado foi: %d E %d", x,y);

    //OUTROS EXEMPLO DE COMO REALIZAR IMPRESSÃO DE DADOS:
    printf("Que Loucura NAO?!\n\n");
    printf("Se liga nessa nova forma de escrever o codigo\n\n");

    printf("ab%dcd\n\n",27); ///imprime o texto substituindo o %d pelo número contido após a vírgula (isto é, imprime ab27cd

    printf("xy%3dwz\n\n",65); ///faz o mesmo com o número ocupando 3 posições da linha, alinhado no lado direito : xy 65wz

    printf("*a%-4d*a\n\n",58); ///faz o mesmo com o número ocupando 4 posições da linha, alinhado do lado esquerdo: *a58   *a

    // a partir da linha abaixo faça isso, ou seja, complete com os  comandos acima //

    printf("*1111 1111*\n");
    printf("*111   111*\n");
    printf("*11     11*\n");
    printf("*1       1*\n");
    printf("*11     11*\n");
    printf("*111   111*\n");
    printf("*1111 1111*\n");

    //EXEMPLO DE CONTAS QUE PODEM SER FEITAS;

    //LETRA A: VALOR ARMAZENADO EH REAL = 2.5//
    float result1;
    result1 = (20-15) / 2.0;
    printf("o resultado eh %.1f\n", result1);

    //LETRA B: VALOR ARMAZENADO EH INTEIRO = ZERO//
    int result2, a, b = 5, c = 3;
    result2 = a *(b/20) + (30/(15*c));
    printf("o resultado eh %d\n", result2);

    //LETRA C: VALOR ARMAZENADO EH REAL = 7, OU SEJA 5(RESTO DA DIVISÃO)+2//
    float result3;
    result3 = (35%6)+2;
    printf("o resultado eh %.2f\n", result3);

    //LETRA D: VALOR ARMAZENADO EH INTEIRO = 4//
    float result4;
    result4 = sqrt(20);
    printf("o resultado eh %.4f\n", result4);

    //LETRA E: VALOR ARMAZENADO EH INTEIRO = 3, OU SEJA, 21 MÓDULO 5 RESTA 1, RAÍZ QUADRADA DE 1 EH 1 , SOMA-SE + 2//
    float result5;
    int a1 = 5;
    result5 = 2 + sqrt(21%a1);
    printf("o resultado eh %.2f\n", result5);    // %._ número de casa pós a víngula - no exemplo do exercício foi usado uma casa//;

    //LETRA A//
    int a10, b10, c10, d10;
    float resultado10;

    a10 = 20;
    b10 = 15;
    c10 = 2;
    resultado10 = (a10-b10)/(float)c10;
    printf("RESPOSTA LETRA A EH:\n\n %.1f \n\n ", resultado10);

    //LETRA B//
    int a11 = 5, b11 = 20, c11 = 30,d11 = 15;
    float resultado11;

    resultado11 =  2*(a11/(float)b11) +  (float)c11/(d11*2) ;
    printf("RESPOSTA LETRA B EH:\n\n %.1f \n\n ", resultado11);

    //LETRA C//
    int e13 = 35;
    float resultado13;

    resultado13 = (35%6)+2;
    printf("RESPOSTA LETRA C EH:\n\n %.1f \n\n ", resultado13);

    //LETRA D//
    int fV = 20;
    float resultado14;

    resultado14 = sqrt(20);
    printf("RESPOSTA LETRA D EH:\n\n %.2f \n\n ", resultado14);

    //EXEMPLO DE ATRIBUIÇÃO DE VALORES
    int a15, b15, aux;

    a15 = 3;
    b15 = 9;

    aux = a15;
    a15=b;
    b15=aux;

    printf("a = %d b = %d aux = %d", a15,b15,aux);

    //LETRA A //
    int x10, y10;
    float resultado20, resultado22, resultado23;

    x10 = 2;
    y10 = 3;

    resultado20 = (2*(pow(x,2)) - sqrt(y)) / (3 + x);
    printf("O RESULTADO DA LETRA A EH: %.4f \n\n", resultado20);

    //LETRA B//
    float y15, x15;

    y15 = 2;
    x15 = 3;

    resultado22 = (float)1/4*y15 + pow(((float)3*x15/2),3);
    printf("O RESULTADO DA LETRA B EH: %.4f \n\n", resultado22);

    //LETRA C//
    float y12, x12;

    x12 = 19;
    y12 = 10;

    resultado23 = pow(x, 1.0/3.0)+2;
    printf("O RESULTADO DA LETRA C EH: %.4f \n\n", resultado23);

    ///LETRA A:
    int A30=10,B30=17,C30=19,total30;
    total30 = (A30+B30)*C30;
    printf("o resultado eh %d\n", total30);

    A30=15;
    B30=18;
    C30=35;
    total30 = (A30+B30)*C30;
    printf("o resultado eh %d\n", total30);

    ///LETRA B:
    int TOTAL40=10;
    float N40=5.0, X40;

    X40=TOTAL40/N40;
    printf("o resultado eh %.1f\n", X40);

    TOTAL40=28;
    N40=7.0;
    X40=TOTAL40/N40;
    printf("o resultado eh %.1f\n", X40);

    ///LETRA C:
    float A2=3.2,B2=5.1,C2=7.8,D=9.9,E=11.8,X2;

    X2 = (A2-(B2*(C2+pow(D,2)))) / E;
    printf("o resultado eh %.2f\n", X2);

    A2=4.0, B2=6.0, C2=8.0, D=10.0, E=12.0;
    X2 = ((B2*(C2+pow(D,2)))-A2) / E;
    printf("o resultado eh %.2f\n", X2);

    ///LETRA D:
    int x50=2,y50=4,exp50;

    exp50 = pow(x50,y50);
    printf("o resultado eh %d\n", exp50);

    x50=8, y50=2;
    exp50 = pow(x50,y50);
    printf("o resultado eh %d\n", exp50);

    ///LETRA E:
    int a61=10, b62=20, c63=2, conta;
    conta= a61*pow(b62,c63);
    printf("o resultado eh %d\n", conta);

    //MAIS EXEMPLOS DE ATRIBUIÇÕES
    int A70=2, B70=1, C70=22, D70=4, resultado701, resultado702,  resultado704, BASE=2, EXPOENTE=2;
    int TOTAL70 = 1910 , N70 = 109;
    float a80=19.0, b80=10.0, c80=2.0, resultado703, resultado705;

    resultado701 = (A70+B70)*C70;
    resultado702 = TOTAL70/N70;
    printf("O RESULTADO DA LETRA A EH: %d \n\n", resultado701);
    printf("O RESULTADO DA LETRA B EH: %d \n\n", resultado702);

    float A170=2.0, B170=1.0, C170=22.0, D170=4.0, E70=5.0;
    resultado703 = (A170 - (B170*(C170+(pow(D170,2)))))/E70;
    printf("O RESULTADO DA LETRA C EH: %.2f \n\n", resultado703);

    resultado704 = pow(BASE,EXPOENTE);
    printf("O RESULTADO DA LETRA D EH: %d \n\n", resultado704);

    resultado705 = a80 * pow(b80,c80);
    printf("O RESULTADO DA LETRA E EH: %.4f \n\n", resultado705);

    //MAIS EXEMPLOS DE FLOAT E INTEIROS
    float peso1, peso2, peso3;

    printf ("Digite tres valores em Quilos:\n");
    scanf("%f\n %f\n %f", &peso1, &peso2, &peso3);
    printf("Os pesos digitados foram: %.2f e %.2f e %.2f", peso1, peso2, peso3);

    float real, totalReais;
    float dollar = 3.80;

    printf ("Digite o valor em Real:\n");
    scanf("%f", &real);
    totalReais = real/dollar;
    printf("Seu valor em dollar eh: $ %.2f ", totalReais);

    int Wa, Wb, Wc, Wd, Wtotal;

    printf("Digite 4 valores inteiros \n");
    scanf("%d %d %d %d", &Wa, &Wb, &Wc, &Wd);

    Wtotal = (Wa+Wb+Wc)*Wd;
    printf("O total da expressao eh: %d ", Wtotal);

    return 0;
}
