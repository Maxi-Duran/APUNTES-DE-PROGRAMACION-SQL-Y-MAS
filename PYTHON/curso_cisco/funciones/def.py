def message(): # definiendo una función
    print("Hello") # cuerpo de la función
 
message() # invocación de la función


def hello(name): # definiendo una función
    print("Hello,", name) # cuerpo de la función
 
 
name = input("Ingresa tu nombre: ")
 
hello(name) # invocación de la función


#con argumentos
def introduction(first_name, last_name):
    print("Hola, mi nombre es", first_name, last_name)
 
introduction("Luke", "Skywalker")
introduction("Jesse", "Quick")
introduction("Clark", "Kent")
 