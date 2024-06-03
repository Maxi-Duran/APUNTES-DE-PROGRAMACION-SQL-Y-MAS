# Solicitar al usuario la palabra y la cadena
word = input("Ingresa la palabra que deseas encontrar: ").upper()
strn = input("Ingresa la cadena en donde deseas buscar: ").upper()

# Inicializar variables
found = True  # Suponemos inicialmente que la palabra se encuentra
start = 0  # Iniciar la búsqueda desde el principio de la cadena

# Iterar sobre cada caracter de la palabra
for ch in word:
    # Buscar el caracter en la cadena desde la posición actual (start)
    pos = strn.find(ch, start)
    
    # Si no se encuentra el caracter, cambiar la bandera a False y salir del bucle
    if pos < 0:
        found = False
        break
    
    # Actualizar la posición de inicio para la próxima búsqueda
    start = pos + 1

# Verificar si la palabra se encontró completamente en la cadena
if found:
    print("Si")
else:
    print("No")


