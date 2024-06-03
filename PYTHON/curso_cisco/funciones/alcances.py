def my_function():
    global var            #global produce que var tenga un alcance global 
    var = 2
    print("¿Conozco a aquella variable?", var)


var = 1
my_function()
print(var)
