for i in range(1, 10):  # Iterar hasta 9 filas
    num = int(input(f"Ingresa Fila #{i}: "))
    fila = list(str(num))

    visto = set()
    for elemento in fila:
        if elemento in visto:
            print(f"En la Fila #{i}, el elemento {elemento} se repite.")
            break
        visto.add(elemento)
    else:
        print(f"En la Fila #{i}, no hay elementos repetidos.")
for i in range(1, 10):  # Iterar hasta 9 filas
    num = int(input(f"Ingresa Fila #{i}: "))
    fila = list(str(num))

    visto = set()
    for elemento in fila:
        if elemento in visto:
            print(f"En la Fila #{i}, el elemento {elemento} se repite.")
            break
        visto.add(elemento)
    else:
        print(f"En la Fila #{i}, no hay elementos repetidos.")




