squares = [x ** 2 for x in range(10)]  #COMPRENSION DE LISTAS
print(squares)

twos = [2 ** i for i in range(8)]   
print(twos)#El fragmento crea un arreglo de ocho elementos que contiene las primeras ocho potencias del numero dos

odds = [x for x in squares if x % 2 != 0 ]
print(odds)  #El fragmento crea una lista con solo los elementos impares de la lista squares.


