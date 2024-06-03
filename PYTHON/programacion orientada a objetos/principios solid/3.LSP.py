class ave:
    def volar(self):
        return "estoy volando"
    

class pinguino(ave):
    def volar(self):
        return "no puedo volar"
                                                                            #mal  la clases que heredan deben pode rhace rtodo lo que la clase padre haga

def hacer_volar(ave=ave):
    return ave.volar()

print(hacer_volar(pinguino()))