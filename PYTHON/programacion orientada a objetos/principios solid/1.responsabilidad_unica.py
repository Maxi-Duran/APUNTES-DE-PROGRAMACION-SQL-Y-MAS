#class Auto():
#    def __init__(self):
#        self.posicion=0
#        self.combustible=100
#
    
 #   def mover(self,distancia):

 #       if self.combustible>=distancia/2:
 #           self.posicion+=distancia
 #           self.combustible -=distancia/2                                      #esto esta mal
 #       else:
 #           print("no hay combustible")
    
 #   def agregar(self,cantidad):
  #      self.combustible+=cantidad

 #   def obtener(self):
 #       return self.combustible
    
class Tanque:
    def __init__(self):
        self.combustible=100

    def usar(self,cantidad):
        self.combustible=self.combustible-cantidad

    def agregar(self,cantidad):
        self.combustible= self.combustible+cantidad                                         #esto es aplicar el metodo SRP 
    def obtener(self):
        return self.combustible
    
class Auto():           
    def __init__(self,tanque):
        self.posicion=0
        self.tanque=tanque

    
    def mover(self,distancia):

        if self.tanque.obtener()>=distancia/2:
            self.posicion+=distancia
            self.tanque.usar(distancia/2)  
            print("avanzado")                                 
        else:
            print("no hay combustible")
    def obtener_posicicion(self):
        return self.posicion

    
    
tanque=Tanque()

auto=Auto(tanque)


print(auto.obtener_posicicion())
auto.mover(10)
print(auto.obtener_posicicion())
auto.mover(20)
print(auto.obtener_posicicion())
auto.mover(60)
print(auto.obtener_posicicion())
auto.mover(100)
auto.obtener_posicicion()
auto.mover(100)