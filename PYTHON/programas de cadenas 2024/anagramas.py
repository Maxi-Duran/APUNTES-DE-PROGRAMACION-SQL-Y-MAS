text = input("Ingresa tu mensaje: ")
text2 = input("Ingresa tu mensaje: ")
lista=list(text)
lista2=list(text2)
if sorted(lista) == sorted(lista2):
    print("Es un anagrama")
else:
    print("No es un anagrama")

