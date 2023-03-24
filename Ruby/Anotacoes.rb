# Para comentar em Ruby, os comentários serão inserir através de hashtag: #
# O que é uma variável?
#     É um objeto, um recipiente, que recebe uma respectiva informação, que conseguentemente,
#     poderá ter seu conteúdo substituído por outra informação.
#     Ruby é um tipo de linguagem de programação que não é tipada.
#     Aspas duplas serão utilizadas para uma string, enqunto as Aspas simples serão usadas para referenciar diretórios ou dependências.

# Utilizando o =
    # = atribuindo valores.
    # == comparando valores.
    # === comparando valores, tipo, características.

#Utilizando variáveis
    # varUm = 1
    # varDois = "Texto"

# Propriedades
    # int =       1
    # decimal =   12,12
    # float =     12.3
    # boolean =   true / false
    # string =    "Texto"

# Atalhos de teclado para faciliar o dia a dia
    # ctrl + ; = comentarm código.
    # ctrl + x = apagar linha.
    # comentários longos serão feitos a utilizando a opção:
    # begin
    #     Aqui teremos comentários longos sendo realizados.        
    # end
    # alt + seta para cima/baixo = move uma linha para cima

#Operadores de entrada e saída
    # para realizar a impressão de mensagem utilizaremos puts.
    #Exemplo:
    puts "Enter your name: "
    # gets # Fará com que fique aguardando / pausado para que uma informação seja digitada
    name = gets
    puts name
    puts "Entre com seu nome"
    firstName = gets
    puts "Entre com seu sobrenome"
    lastName  = gets
    puts firstName + lastName
    puts firstName + " " + lastName
    firstNameTwo = "Vai"
    lastNameTwo = "Corinthians"
    puts "#{firstNameTwo} #{lastNameTwo}"

