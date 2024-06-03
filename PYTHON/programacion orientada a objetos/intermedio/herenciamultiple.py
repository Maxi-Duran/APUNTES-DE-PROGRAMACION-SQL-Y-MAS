class Persona:
    def __init__(self,nombre,edad,nacionalidad):
        self.nombre=nombre
        self.edad=edad
        self.nacionalidad=nacionalidad


class Artista:
    def __init__(self,habilidad) :
        self.habilidad=habilidad

    def mostrar_habilidad(self):
        print(f"mi habilidad es: ",self.habilidad)


class EmpleadoArtista(Persona,Artista):
    def __init__(self,nombre,edad,nacionalidad,habilidad,salario,empresa):
        Persona.__init__(self,nombre,edad,nacionalidad)   #heredamos lo de persona
        Artista.__init__(self,habilidad)  #heredamos de artista 
        self.salario=salario
        self.empresa=empresa

    def mostrar_datos(self):
        super().mostrar_habilidad()  #llamamos a mostrar habilidad de artista

maxi=EmpleadoArtista("maxi",21,"chileno","cantar","programador",190000)

maxi.mostrar_datos()

print(issubclass(EmpleadoArtista,Artista))  #comprtobacion de subclases
print(isinstance(maxi,EmpleadoArtista))