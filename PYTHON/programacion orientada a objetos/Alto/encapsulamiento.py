class MiClase:
    def __init__(self):
        self._atributo_privado="valor"  #un guion bajo significa que el atributo es privado  o protectecd
                                         # dos guiones bajos significa que el atributo es super privado
    def __hablar(self):
        print("hola")
o=MiClase()

print(o._atributo_privado)

print(o.__hablar())