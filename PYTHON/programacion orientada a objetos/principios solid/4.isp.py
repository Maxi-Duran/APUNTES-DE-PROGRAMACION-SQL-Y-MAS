from abc import ABC,abstractclassmethod


class Trabajador(ABC):
    @abstractclassmethod
    def comer(self):
        pass

    @abstractclassmethod
    def trabajar(self):
        pass

    @abstractclassmethod
    def dormir(self):
        pass


class Humano(Trabajador):

    def comer(self):
        print("el humano esta comiendo")

    def dormir(self):
        print("el humano duerme")

    def trabajar(self):                                 #esto esta mal porque robot no come ni duerme asi que habra un error para ello se crean 2 clases mas 
                                                        #que serian comedor y durmientes
        print("el humano trabaja")


class robot(Trabajador):

   

    def trabajar(self):
        print("el robot trabaja")