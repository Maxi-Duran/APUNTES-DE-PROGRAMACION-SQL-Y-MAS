num = int(input("Ingresa tu mensaje: "))

suma=0
lista=list(str(num))

while True:
      
    for i in lista:
            numero=int(i)
            suma=suma+numero
    if suma<10:

        break
       
    lista = list(str(suma))
    suma=0 
               
                

    

print(suma)

