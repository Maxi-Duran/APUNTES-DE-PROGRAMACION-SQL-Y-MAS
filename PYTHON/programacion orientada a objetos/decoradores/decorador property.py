class Persona:
    def __init__(self,nombre,edad):
        self.__nombre=nombre
        self.__edad=edad
    @property                   #le decimos que el getter es una propiedad  y no tenemos que usar los () al llamar el getter #decorado que accede a la propiedad
    def get_nombre(self):     
        return self.__nombre

    @get_nombre.setter          #decorador que modifica la propiedad
    def set_nombre(self,nuevo):
        self.__nombre=nuevo
    
maxi=Persona("maxi",21)
print(maxi.get_nombre)
maxi.set_nombre="juan"


print(maxi.get_nombre)


