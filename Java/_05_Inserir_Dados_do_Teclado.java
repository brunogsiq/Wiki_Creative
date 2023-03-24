// Pacote de Java Para Poder Inserir Dados;
import java.util.Scanner; 

public class _05_Inserir_Dados_do_Teclado{
	
	public static void main(String args[]){

	Scanner entrada = new Scanner(System.in);
	
	//Capturar strings, ou seja, textos.
			//Exemplo: String nomeDaVariavel = nomeDoObjeto.nextLine
		
		System.out.print("Digite seu Nome:  ");
		String letra = entrada.nextLine();
		System.out.println(letra);
	
	//Capturar números inteiros.
		//Exemplo: int nomeDaVariavel = nomeDoObjeto.nextInt();
	
	System.out.print("Qual o Ano que você Nasceu?  ");
	int anoNasc = entrada.nextInt();
	System.out.print("Escreva o Ano atual?  ");
	int anoAtual = entrada.nextInt();
	int anoIdade = anoAtual - anoNasc;
	System.out.println("Aproximadamente tantos anos.");
	
	//Capturar número reais, com casa decimais.
		//Exemplo: float nomeDaVariavel = nomeDoObjeto.nextFloat();
	
	System.out.print("Digite um Valor Real:  ");
	float valor = entrada.nextFloat(); 
	System.out.println(valor);
	}
}
