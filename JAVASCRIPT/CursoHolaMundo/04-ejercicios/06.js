let array=[2,5,7,15,-5,-100,55]

function get(arr){
    let pos=0;
    let neg=0;
   for (numero of array){
    if(numero>0){
        pos++
    }else{
        neg++
    }
        

   }
   console.log('Numero positivo: ',pos,'Numero negativo: ',neg)
}

let hola=get(array)

console.log(hola)