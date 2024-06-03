class Estudiante:
    def __init__(self,Nombre,Edad,Grado):
        self.nombre=Nombre
        self.Edad=Edad
        self.Grado=Grado

    def estudiar(self):
        print(f"El estudiante {self.nombre} esta estudiando")



nombre=input("Ingrese el nombre del estudiante")
edad=input("Ingrese la edad del estudiante")
grado=input("Ingrese el grado del estudiante")

estudiante=Estudiante(nombre,edad,grado)

accion=str(input("que desea hacer?"))
if accion.lower=="estudiar" :
    estudiante.estudiar()
else:
    print("adios")

