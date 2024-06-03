beatles=[]

beatles.append("jhon lennon")
beatles.append("Paul Mccartney")
beatles.append("George harrison")
for i in range(2):
    nom=str(input("nombre"))
    beatles+=nom

del beatles[3]
del beatles[3]
beatles.insert(0,"ringo star")
print(beatles)
