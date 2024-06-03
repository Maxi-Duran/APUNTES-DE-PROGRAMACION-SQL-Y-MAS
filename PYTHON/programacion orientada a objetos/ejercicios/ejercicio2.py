class Persona():
    def __init__(self,nombre,edad):
        self.nombre=nombre
        self.edad=edad
    def mostrar_persona(self):
        print("Nombre de la persona: ",self.nombre)
        print("Edad de la persona: ",self.edad)

class Estudiante(Persona):
    def __init__(self,nombre,edad,grado):
        super().__init__(nombre,edad)
        self.grado=grado

    def mostrar_grado(self):
        print("El grado del estudiante es: ",self.grado)
    def mostrar_todo(self):
        print("Nombre de la persona: ",self.nombre)
        print("Edad de la persona: ",self.edad)
        print("El grado del estudiante es: ",self.grado)

maxi=Estudiante("maxi",21,"universidad")

maxi.mostrar_todo()