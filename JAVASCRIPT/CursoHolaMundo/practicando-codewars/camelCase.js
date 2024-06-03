function toCamelCase(str){


    let palabras = str.split(/[-_]/);  //dentro del "array" indicamos los caracteres
        for(i in palabras){
        if(palabras[i].charAt()==palabras[i].charAt().toLowerCase()&& i==0 ){
            palabras[i]=palabras[i].charAt().toLowerCase()+palabras[i].slice(1)
            
            
        }else{
            palabras[i]=palabras[i].charAt().toUpperCase()+palabras[i].slice(1)
        }
          
        
            
        }
        
        return palabras.join('')
    }

toCamelCase('the-Stealth_warrior')