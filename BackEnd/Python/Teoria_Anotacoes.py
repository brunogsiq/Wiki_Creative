import math

'''Python - Diversos Cursos na Udemy em 1'''
# Entrada de Dado: nomeVariavel = input()
# Saída de Dado: print(nomeVariavel)

# Variáveis
ValorHora = 4
Dias = 30
HorasTrabalho = 8
Salario = (ValorHora * HorasTrabalho * Dias)
NomeBr = "Bruno"

print(ValorHora)
print(Dias)
print(Salario)
print(NomeBr)
Valor = 10

'''Strings = Quando e Como Utilizar? É uma variável não numérica, ou seja, um conjunto de caracteres, lembre-se Python é case sensitive'''

Nome1 = "BrunoGSiq"
Nome2 = "Bruno G. Siqueira"
print(Nome1)
print(Nome2)
print(Nome2[0:8])
Nome1 * 3
print(NomeBr*3)
print("t" in Nome2)
print("S" in Nome2)

# Listas =[]
'''Lista: Conjuntos de informações, que iniciam na posição Zero, a syntaxe de criação é: nomeLista [ item1, item2, ...] '''

Lista = [1, 4, 7, "Bruno", 10, 17]
print(Lista)
Lista.append("Siqueira")
Lista.append(23)
# '''O comando .append adicionará o item que desejar a lista.'''
print(Lista)
print(Lista.index(4))
print(Lista.index(17))
print(Lista.index("Bruno"))
# '''O comando .index vai nos proporcionar saber a posição de um item dentro da nossa lista.'''
print(Lista.count(10))
# '''O comando .count vai nos proporcionar saber a posição de um item dentro da nossa lista.'''
Lista.append(10)
print(Lista)
print(Lista.count(10))
# '''Neste exemplo, adicionamos com o comando .append mais um número 10, depois contamos quantas vezes ele está contido na lista.'''
Lista.remove("Bruno")
print(Lista)
# '''O comando .remove irá remover um item da lista que possa tornar-se desnecessário.'''
Lista.reverse()
print(Lista)
# '''O comando .reverse() irá inverte a ordem dos itens na lista.'''
Lista2 = [10, 2, 8, 4, 6, 0]
Lista2.sort()
print(Lista2)
Lista3 = ['f', 'b', 'a', 'c', 'd']
Lista3.sort()
print(Lista3)
# '''O comando .sort() irá ordenar numericamente ou por ordem alfabética a lista.'''
Lista4 = [1, 2, 17]
print(17 in Lista4.keys())
print(171 in Lista4.keys())

# Dicionários ={} - Pode-se adicionar e retirar itens, valores.
'''Para a criação de Dicionários, a syntaxe utilizada será nomeDicionario {}'''
Numeros = {"Bruno": 10, "Renato": 8, "Paulo": 15}
print(Numeros)
Numeros["Cassio"] = 12
print(Numeros)
del Numeros["Bruno"]
print(Numeros)
'''Por tanto para eu adicionar um item ao meu dicionário, devo inserir a syntaxe nomeDicionario["item"] = item
    enquanto para deletar, será utilizada a syntaxe del nomeDicionario ["item"]'''
contatos = {
    'Bruno_Siqueira': {
        'email': 'brunogsiq@gmail',
        'cel': '48 - 99105 - 9871'
    },
    'Bruno_Goncalves': {
        'email': 'brunosthill@gmail.com',
        'fone': 'Não Tem'
    }
}
print(contatos['Bruno_Siqueira']['email'])
print(contatos['Bruno_Goncalves']['fone'])

# Tuplas =() - Difere-se do Dicionário, pois não é permitido adicionar nem remover valores.
'''A syntaxe de criação das tuplas é nomeTupla= ("item1","item2","item3"). Podemos descobrir as posições dos itens que estão
    presentes nesta Tupla, caso não possua um item, será apresentado um erro, como no exemplo abaixo [3]'''

ListaNomes = ("Bruno", "Vampeta", "Ríncon")
ListaNomes2 = ("Ronaldo", "Marcelinho", "Ricardinho")
ListaNomes3 = ("Sport", "Clube", "Corinthians", "Paulista")
print(ListaNomes)
# '''ListaNomes[3] print[3] - Exemplo de error'''
print(ListaNomes[0:3])
print(ListaNomes[0:2])
print(len(ListaNomes))
# '''O comando len(), irá contar o número de variáveis ou strings dentro de uma tupla.'''
ListaSoma = (ListaNomes + ListaNomes2 + ListaNomes3)
ListaMultiplica = (ListaNomes3 * 3)
print(ListaSoma)
print(ListaMultiplica)
# '''Pode-se realizar operações aritméticas com tuplas'''
print("Parreira" in ListaSoma)
print("Bruno" in ListaSoma)
'''Verificaçao de item em tupla'''
ConverterListaParaTupla = [1, 4, "Item"]
print(ConverterListaParaTupla)
ConverterListaParaTupla2 = tuple(ConverterListaParaTupla)
print(ConverterListaParaTupla2)
'''Pode-se converter Lista para Tuplas'''

# Condições / Estrutura de Repetição / Loop´s:
# If: - Else: - Elif
NumEx = int(input("Digite um número: "))
if (NumEx == 1):
    print("Número é igual a 1")
else:
    ("Número não é igual a 1")

NomeEx = "Bruno"
if("Z" in NomeEx):
    print("Nome possui a letra Z")
elif("P" in NomeEx):
    print("Nome possui a letra P")
else:
    print("Nome não possui nenhuma das letras")

# For Loop
for x in range(0, 5):
    print("Valor de x é: ", x)
NomeEx2 = "Bruno"
for Letra in NomeEx2:
    print(Letra)
Lista = ["Bruno", 17, "Corinthians", 1910]
for ValorEx1 in Lista:
    print(ValorEx1)

# While
NumeroTeste = 1910
while NumeroTeste > 0:
    NumeroTeste = NumeroTeste - 109
    print(NumeroTeste)

NomesTeste = ["Sport", "Club", "Corinthians", "Paulista"]
i = 0
while i < len(NomesTeste):
    print(NomesTeste[i])
    i += 1

# Pass # Break # Continue
NumeroTeste2 = 20
while True:
    NumeroTeste2 = NumeroTeste2 - 2
    print(NumeroTeste2)
    if(NumeroTeste2 < 2):
        break

NumeroTeste3 = 100
while True:
    NumeroTeste3 = NumeroTeste3 - 2
    if(NumeroTeste3 == 90):
        pass
    elif(NumeroTeste3 == 80):
        continue
    elif(print(NumeroTeste3 == 70)):
        pass
    else:
        break

# find()
'''Para pesquisar um item'''
Time = "Corinthians"
print(Time.find("C"))
print(Time.find("s"))
print(Time.replace("Corinthians", "SCCP1910"))
print(Time.upper())  # '''deixa itens em maisuculo'''
print(Time.lower())  # '''deixa itens em minusculo'''

Ii = 10
Ff = 17.0
Aa = 25
Bb = 3
print(Aa + Bb)
print(Aa - Bb)
print(Aa * Bb)
print(Aa / Bb)
print(Aa ** Bb)  # '''A*A*A multiplicado ou A³'''
print(Aa // Bb)  # '''Vai trazer o valor inteiro da divisão'''
print(Aa % Bb)
print(pow(2, 5))
print(max(2, 5, 9, 7))
print(min(2, 5, 9, 7))

print(math.ceil(15.18))  # '''Arredonda para o próximo inteiro acima, no caso 16'''
print(math.floor(15.18))  # '''Arredonda para o próximo abaixo acima, no caso 15'''
print(math.sqrt(64))  # '''Raíz Quadrada'''
print(math.sin(45))  # '''Seno'''
print(math.cos(45))  # '''Coseno'''
print(math.tan(45))  # '''Tangente'''

# Função


def func_test(nome3, idade3):
    print("Meu nome é " + nome3)
    print("Tenho " + str(idade3) + " anos")


func_test("Bruno", 35)
func_test("Corinthians", 110)


def sumario():
    global NumeroSum
    NumeroSum = 1
    print("Inicial: " + str(NumeroSum))


sumario()
print(input("Final: " + str(NumeroSum))
