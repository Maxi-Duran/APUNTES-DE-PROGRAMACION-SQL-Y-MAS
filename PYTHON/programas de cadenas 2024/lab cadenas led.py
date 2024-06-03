digits = [ '1111110',  	# 0
	   '0110000',	# 1
	   '1101101',	# 2
	   '1111001',	# 3
	   '0110011',	# 4
	   '1011011',	# 5
	   '1011111',	# 6
	   '1110000',	# 7
	   '1111111',	# 8
	   '1111011',	# 9
	   ]


    
   
    
    

num = int(input("Ingresa el número que deseas mostrar: "))
lista = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
digs = str(num)

# Lista para almacenar las líneas acumuladas de cada dígito
result_lines = ['' for _ in range(5)]

for i in digs:
    if i in lista:
        if i == '1':
            result_lines[0] += "#   "
            result_lines[1] += "#   "
            result_lines[2] += "#   "
            result_lines[3] += "#   "
            result_lines[4] += "#   "

        elif i == '2':
            result_lines[0] += "### "
            result_lines[1] += "  # "
            result_lines[2] += "### "
            result_lines[3] += "#   "
            result_lines[4] += "### "

        elif i == '3':
            result_lines[0] += "### "
            result_lines[1] += "  # "
            result_lines[2] += "### "
            result_lines[3] += "  # "
            result_lines[4] += "### "

        elif i == '4':
            result_lines[0] += "# # "
            result_lines[1] += "# # "
            result_lines[2] += "### "
            result_lines[3] += "  # "
            result_lines[4] += "  # "

        elif i == '5':
            result_lines[0] += "### "
            result_lines[1] += "#   "
            result_lines[2] += "### "
            result_lines[3] += "  # "
            result_lines[4] += "### "

        elif i == '6':
            result_lines[0] += "### "
            result_lines[1] += "#   "
            result_lines[2] += "### "
            result_lines[3] += "# # "
            result_lines[4] += "### "

        elif i == '7':
            result_lines[0] += "### "
            result_lines[1] += "  # "
            result_lines[2] += "  # "
            result_lines[3] += "  # "
            result_lines[4] += "  # "

        elif i == '8':
            result_lines[0] += "### "
            result_lines[1] += "# # "
            result_lines[2] += "### "
            result_lines[3] += "# # "
            result_lines[4] += "### "

        elif i == '9':
            result_lines[0] += "### "
            result_lines[1] += "# # "
            result_lines[2] += "### "
            result_lines[3] += "  # "
            result_lines[4] += "### "

        elif i == '0':
            result_lines[0] += "### "
            result_lines[1] += "# # "
            result_lines[2] += "# # "
            result_lines[3] += "# # "
            result_lines[4] += "### "

# Imprimir líneas acumuladas
for line in result_lines:
    print(line)
