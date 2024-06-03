def happy_new_year(wishes = True):       #return sin expresion
    print("Tres...")
    print("Dos...")
    print("Uno...")
    if not wishes:
        return
 
    print("¡Feliz año nuevo!")
happy_new_year()


def boring_function():  #return con expresion
    return 123
 
x = boring_function()
 
print("La función boring_function ha devuelto su resultado. Es:", x)

def strange_function(n):
    if(n % 2 == 0):
        return True           #ejemplos con "none"
print(strange_function(1))
