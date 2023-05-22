// Pacote de Java Para Poder Inserir Dados;
import java.util.Scanner; 

public class _06_Operacoes_Aritmeticas{ 

	public static void main(String arg[]){
		
		int num1 = 10;
		int num2 = 7;
		int resultado1, resultado2, resultado3, resultado4, resultado5;
		
		resultado1 = num1 + num2;
		resultado2 = num1 - num2;
		resultado3 = num1 * num2;
		resultado4 = num1 / num2;
		resultado5 = num1 % num2;
		
		System.out.println(resultado1);
		System.out.println(resultado2);
		System.out.println(resultado3);
		System.out.println(resultado4);
		System.out.println(resultado5);
		//Também pode ser feito da seguinte forma
		System.out.println(num1 + num2);
		System.out.println(num1 - num2);
		System.out.println(num1 * num2);
		System.out.println(num1 / num2);
		System.out.println(num1 % num2);

	}
}
