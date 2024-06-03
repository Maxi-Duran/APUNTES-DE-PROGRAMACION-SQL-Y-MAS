
num1=0
num1=int(input("ingrese un numero"))

while True:
    op=int(input("ingrese una operacion matematica\n 1.suma\n 2.resta\n 3.multiplicacion\n 4.division\n 5.salir"))

    if op==1:
        num2=int(input("Ingrese otro numero"))
        total=num1+num2
        print("la suma de los numeros es:",total)
        num1=0
        num1+=total
    if op==2:
        num2=int(input("Ingrese otro numero"))
        total=num1-num2
        print("la resta de los numeros es:",total)
        num1=0
        num1+=total
    if op==3:
        num2=int(input("Ingrese otro numero"))
        total=num1*num2
        print("la multiplicacion es",total)
        num1=0
        num1+=total
    if op==4:
        num2=int(input("Ingrese otro numero"))   
        total=num1/num2
        print("La division es: ",total) 
        num1=0
        num1+=total
    if op==5:
        break