class Celular:  #CREACION DE CLASES
    

    def __init__(self,marca,modelo,camara): #metodo constructor   #self significa uno mismo  #__init__ el metodo inicia obligatoriamente 
        self.marca=marca  #atributo
        self.modelo=modelo #atributo
        self.camara=camara #atributo
        

    def llamar(self):
        print(f"llamando desde un: {self.modelo}")  #METODO
    def cortar(self):
        print(f"cortando desde un: {self.modelo}")  #METODO

celular1=Celular("samsung","s23","48Mg") #creacion de un objeto
celular2=Celular("apple","15","96Mg")

celular1.llamar()
celular2.llamar()


