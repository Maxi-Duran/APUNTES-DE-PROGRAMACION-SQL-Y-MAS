class Persona:
    def __init__(self,nombre,edad):
        self.__nombre=nombre
        self.__edad=edad
    
    def get_nombre(self):     #creacion de un getter  #puedo llamarlo incluso si esta super privado
        return self.__nombre

    def set_nombre(self,new_nombre):  #creacion de un setter  
        self.__nombre=new_nombre

maxi=Persona("maxi",21)



print(maxi.get_nombre())

maxi.set_nombre("juan")

print(maxi.get_nombre())