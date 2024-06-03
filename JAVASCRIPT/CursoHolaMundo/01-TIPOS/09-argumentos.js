//argumentos y parametros

function suma(a,b){  //parametros
    console.log(arguments)      //ver los argumentos
    return a+b;
}

let resultado =suma(5,6,1,2,3)  //Arguemntos
console.log(resultado)
console.log(typeof suma)
