class Persona():
    
    def __init__(self,nombre,edad):
        self.nombre=nombre
        self.edad=edad

    def __str__(self):                                        #convercion a tupla o lista  #deolverlo en forma de texto
        return f'(nombre={self.nombre},edad={self.edad})'
    
    def __add__(self,otro):                                                     #sumar nose xd
        neuvo_valor=self.edad+otro.edad
        return Persona(self.nombre+otro.nombre,neuvo_valor)
    
maxi=Persona("Maxi",21)
pedro=Persona("pedro",24)
print(maxi+pedro)