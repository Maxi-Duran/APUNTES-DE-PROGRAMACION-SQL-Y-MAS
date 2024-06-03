dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
phone_numbers = {'jefe' : 5551234567, 'Suzy' : 22657854310}
empty_dictionary = {}
 
print(dictionary)
print(phone_numbers)
print(empty_dictionary)


print(dictionary['gato'])          #obtener un valor especifico
print(phone_numbers['Suzy'])       #deben ser con corchetes



dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
dictionary['gato'] = 'minou'
print(dictionary)           #cambiar un valor


dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
dictionary['cisne'] = 'cygne'           #agregar una nueva clave   #tambien se puede hacer con update =dictionary.update({"pato": "canard"})
print(dictionary)

dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
del dictionary['perro']      #del para eliminar un elemento
print(dictionary)
 

dictionary = {"gato": "chat", "perro": "chien", "caballo": "cheval"}
 
dictionary.popitem()                          #popi item para eliominar el ultimo elemnto del diccionario
print(dictionary) # salida: {'gato': 'chat', 'perro': 'chien'}
