class Personajes:
    def __init__(self, nombre, poder):
        self.nombre = nombre
        self.poder = poder

    def __str__(self):
        return f"nombre={self.nombre} poder={self.poder}"

    def __add__(self, otro):
        nuevo_poder = self.poder + otro.poder
        return Personajes(self.nombre + otro.nombre, nuevo_poder)

def mostrar_personajes(personajes):
    if not personajes:
        print("Aún no se ha creado personajes")
    else:
        print("Personajes disponibles:")
        for i, personaje in enumerate(personajes):
            print(i + 1, personaje)

def Creacion_Personajes():
    nombre = input("Ingrese el nombre del personaje: ")
    poder = int(input("Ingrese el poder del personaje: "))
    return Personajes(nombre, poder)

# Lista para almacenar los personajes
personajes = []

while True:
    print("1. Crear Personajes")
    print("2. Fusionar Personajes")
    print("3. Mostrar Personajes")
    print("4. Salir")
    
    # Solicitar la opción al usuario
    op = int(input("¿Qué desea hacer? "))

    if op == 1:
        # Crear un nuevo personaje y agregarlo a la lista
        personaje_nuevo = Creacion_Personajes()
        personajes.append(personaje_nuevo)
    elif op == 2:
        # Mostrar los personajes existentes y fusionar dos personajes
        mostrar_personajes(personajes)
        num1 = int(input("Ingrese el número del personaje 1: "))
        num2 = int(input("Ingrese el número del personaje 2: "))
        
        personaje1 = personajes[num1 - 1]
        personaje2 = personajes[num2 - 1]
        personaje_fusionado = personaje1 + personaje2
        
        # Agregar el nuevo personaje fusionado a la lista y mostrarlo
        personajes.append(personaje_fusionado)
        print("El nuevo personaje es:", personaje_fusionado)
    elif op == 3:
        # Mostrar todos los personajes existentes
        mostrar_personajes(personajes)
    elif op == 4:
        # Salir del bucle y terminar el programa
        break
