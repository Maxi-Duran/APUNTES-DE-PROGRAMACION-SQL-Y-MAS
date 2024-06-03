class notificador:
    def __init__(self,usuario,mensaje):
        self.usuario=usuario
        self.mensaje=mensaje
    
    def notificar(self):
        raise NotImplementedError  #le decimos que debe crear una clase notificar
    

class NotifacorEmail(notificador):
    def Notificador(self):
        print(f"Enviando mensaje a {self.usuario.email}")               #programa abierto crear una clase padre y las hereda todas las demas 
    

class notificadorsms(notificador):
        def Notificador(self):
            print(f"enviando sms a{self.usuario.sms}")