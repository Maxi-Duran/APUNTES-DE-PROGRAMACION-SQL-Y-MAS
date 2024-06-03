class Animal:
    def comer(self):
        print("comiendo")
class Mamifero:
    def amamantar(self):
        print("amamantando")
class Ave:
    def volar(self):
        print("volando")



class Muercielago(Mamifero,Ave):
    def amamantar(self):
        print("amantando2")

    def volar(self):
        print("voladno2")

maxi=Muercielago()

maxi.volar()