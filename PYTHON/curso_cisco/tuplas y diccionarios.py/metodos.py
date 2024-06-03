dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
for key in dictionary.keys():
    print(key, "->", dictionary[key])              #metodo keys retorna o regresa una lista de todas las claves dentro del diccionario. 


dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
for spanish, french in dictionary.items():
    print(spanish, "->", french)                   # Este método retorna una lista de tuplas donde cada tupla es un par de cada clave con su valor.



dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
for french in dictionary.values():
    print(french)      #regresa con una lista de valores