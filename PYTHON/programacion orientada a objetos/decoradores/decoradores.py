def decorador(funcion):
    def funcion_modificado():
        print("antes")
        funcion()
        print("despues")
    return funcion_modificado

# def saludo():
#     print("hola maxi")


# saludo_modificado=decorador(saludo)               

# saludo_modificado()

@decorador                      #funcion decoradora  es todo el codigo que hicimos arriba pero resumido
def saludo():
    print("hola")

saludo()