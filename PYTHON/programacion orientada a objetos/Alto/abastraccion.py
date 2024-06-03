from abc import ABC,abstractclassmethod    #importacion de metodo para abstraer clases

class Persona(ABC):                 #colocar el ABC y con arroga el abstract class methos para indicar que es una clase abstracta
    @abstractclassmethod
    def __init__(self,nombre,edad,sexo,actividad):
        self.nombre=nombre
        self.edad=edad
        self.sexo=sexo
        self.actividad=actividad
    @abstractclassmethod
    def hacer_actividad(self):
        pass

    
    def presentarse(self):
        print("hola me llamo",self.nombre,"y tengo ",self.edad," años")


class Estudiante(Persona):
    def __init__(self,nombre,edad,sexo,actividad):
        super().__init__(nombre,edad,sexo,actividad)

    def hacer_actividad(self):
        print("estoy estudiando: ",self.actividad)

maxi=Estudiante("maxi",21,"Masculino","programador")

maxi.hacer_actividad()