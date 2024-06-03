#tridimensional

rooms = [[[False for r in range(20)] for f in range(15)] for t in range(3)]
rooms[1][9][13] = True #reservar habitacion
rooms[0][4][1] = False #desocupar habitacion

vacancy = 0
 
for room_number in range(20):
    if not rooms[2][14][room_number]:  #verificar si hay disponibilidad
        vacancy += 1
