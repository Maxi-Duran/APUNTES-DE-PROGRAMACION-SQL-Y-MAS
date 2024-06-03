function suma(){
    return Array.from(arguments)
    .reduce((acc,el)=>acc+el)
}

console.log(suma(1,2,3,4))  //NaN not a number



//arguments es un //ES UN ITERATOR