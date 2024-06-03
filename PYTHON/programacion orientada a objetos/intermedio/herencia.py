class Persona:
    def __init__(self,nombre,edad,nacionalidad):
        self.nombre=nombre
        self.edad=edad
        self.nacionalidad=nacionalidad


class Empleado(Persona):  #heredamos todo de persona
    def __init__(self,nombre,edad,nacionalidad,trabajo,salario):
        super().__init__(nombre,edad,nacionalidad)  #indicamos que qqueremos heredar de la clase padre
        self.trabajo=trabajo
        self.salario=salario

    def verDatos(self):
        print("nombre: ",self.nombre)
        print("edad: ",self.edad)
        print("nacionalidad",self.nacionalidad)
        print("trabajo: ",self.trabajo)
        print("sueldo ",self.salario)
roberto =Empleado("roberto",43,"chileno","programador",1000000)

roberto.verDatos()