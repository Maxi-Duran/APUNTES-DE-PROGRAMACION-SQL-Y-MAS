const suma=()=>{
    return Array.from(arguments)
    .reduce((acc,el)=>acc+el)
}

console.log(suma(1,2,3,4))  //NaN not a number

//fat arrow functions
//no tienen arguments
//tampoco super y this

//utilizar las fat arrrow functions para calculos