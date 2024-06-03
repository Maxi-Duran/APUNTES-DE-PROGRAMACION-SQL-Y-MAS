# Cifrado César.
text = input("Ingresa tu mensaje: ")
num=int(input("Ingrese un numero de desplazo"))  
cipher = ''
for char in text:
    if not char.isalpha():
        continue
    
	
    code = ord(char) + num
    if code > ord('z'):
        code -=26
        
    cipher += chr(code)+ ' '

print(cipher)