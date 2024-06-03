saludo="hola global"
def saludar():                  #los dos def se define como contexto global
    saludo= "hola mundo"
    print(saludo)

def saludamaxi():
    saludo="hola maxi"  
    print(saludo)

saludar()
saludamaxi()
saludar()
print(saludo)         #python sabe que trabajamos con un diferente saludo a los demas

