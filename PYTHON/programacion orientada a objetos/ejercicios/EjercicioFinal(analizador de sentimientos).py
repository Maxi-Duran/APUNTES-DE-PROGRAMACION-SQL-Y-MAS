from textblob import TextBlob





class AnalizadorSentimientos:
    def analizar_sentimiento(self,texto):
        analisis=TextBlob(texto)

        if analisis.sentiment.polarity>0:
            return("positivo")
        elif analisis.sentiment.polarity==0:
            return("neutral")
        else:
            return ("negativo")


texto=AnalizadorSentimientos()

resultado=texto.analizar_sentimiento("neither good nor bad")

print(resultado)



    
