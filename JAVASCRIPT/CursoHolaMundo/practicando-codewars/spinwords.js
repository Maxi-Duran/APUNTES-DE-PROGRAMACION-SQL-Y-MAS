function spinWords(string){
    
    let palabras=string.split(' ') //aqui la palabra la convertimos en un array y se divide por los espacios
   
    for(i in palabras){

        if(palabras[i].length>=5){
            palabras[i]=palabras[i].split('').reverse().join('')
            
            
        }
    }
   console.log(palabras.join(' '))
}