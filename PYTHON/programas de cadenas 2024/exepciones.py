try:
    v=int(input("Ingresa un numero del 0 al 10"))

        
    if v>0 and v<10:
            print("el numero es: ",v)
    else:
            print("error el valor no esta dentro del rango permitido")  
except ValueError:
    print("has ingresado un caracter")   


