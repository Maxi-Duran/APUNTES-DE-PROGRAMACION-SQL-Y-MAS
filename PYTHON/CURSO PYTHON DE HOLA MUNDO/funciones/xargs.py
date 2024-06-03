def suma(*numeros): #indicamos que queremos sumar varios numeros, es importante el asterisco
    resultado=0
    for numero in numeros:
        resultado+=numero
    print(resultado)

suma(2,5,7)
suma(2,5)               #iterables
suma(2,8,6,45,32)      