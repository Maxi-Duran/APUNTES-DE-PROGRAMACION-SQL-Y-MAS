lista=[1,2,3,4,5,6,7,8,9,10]
encontrar=5
encontrado=False

for i in range(len(lista)):
    encontrado=lista[i]==encontrar
    if encontrado:
        break

if encontrado:
    print("Elemento encontrado en el indice",i)
else:
    print("ausente")
