/*
A - Principais Estrutura de Dados são:

1 Vetores e Matrizes ou Arrays;
2 Registro;
3 Fila;
4 Pilha;
5 Árvore;
6 Tabela Hash;
7 Grafos;

Observação:

    Anotações:
Java é uma linguagem de programação orientada a objetos multiplataforma.
Compilada para bytecode, interpretada por uma máquina virtual, conhecida como JVM, que chama-se Java Virtual Machine
Para programar em java, será necessário baixar o JDK, Java Development Kit, um editor de texto comum, como bloco de notas, e o prompt de comando CMD.
Com o comando: java -version ,verifica-se a versão do Java Instalado.
Java é case sensitive, e não podemos usar palavras reservadas a biblioteca.
Começar com número na classe pública pode dar problema na hora de compilar ou executar o programa.

    Comandos:
Para compilar um arquivo em java, utiliza-se o cmd, navega-se até onde o mesmo está salvo, e utiliza o seguinte comando: javac “nome_do_arquivo.java” , sem aspas, se não possuir erros, vai mostrar o caminho da pasta e ocorrendo tudo bem, onde encontra-se o arquivo, será criado o arquivo nome_do_arquivo.class , que é o arquivo executável em java. 
Já para executar, irá utilizar o seguinte comando java nome_do_ arquivo .
Para imprimir uma mensagem na tela, utiliza-se: System.out.println("Exemplo 1!!!");
Para entrar com dados, fazemos a importação da biblioteca com o comando
import java.until.Scanner e depois, Scanner nomeDoObjeto = new Scanner(System.in);

A.1 - Vetores e Matrizes, 

Também chamada de arrays, irão auxiliar quando dentro do algorítmo, 
haverão várias variáveis do mesmo tipo.

Lembrando que a posição inicial é do vetor.
*/


public class _01_PrimeirasLinhasDeComando{
	
	public static void main(String args[]){
		/*
			System.out.print - N�O PULA LINHA;
			System.out.println - PULA 1 LINHA;
		*/
		System.out.println("Exemplo 1!!!");
		System.out.println("Nossa Primeira e Segunda Linhdas de Comando em Java");
		System.out.println("javac nomeDoArquivo.java = Compila");
		System.out.println("java nomeDoArquivo = Executa");
		
	}
}



