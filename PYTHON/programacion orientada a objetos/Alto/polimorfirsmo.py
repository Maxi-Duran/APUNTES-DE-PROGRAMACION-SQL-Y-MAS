class Gato():
    def sonido(self):
        print("miau")

class Perro():
    def sonido(self):
        print("guau")
                        #tenemos 2 sonnidos pero que hacen cosas diferentes, aqui no hya sobrecarga de metodos como en java
gato=Gato()

perro=Perro()

gato.sonido()
perro.sonido()