

try{
function sumaTodo(arr){
    if(!Array.isArray(arr)){
        throw new Error('no es un array')
    }
    return arr.reduce((acc,el)=>{
        if(typeof el !=='number'||Number.isNaN(el)){
            throw new Error('Elemento '+ el +' no es numero')
        }
        return acc+el
})

}

//console.log(sumaTodo([1,2,3,4]))
console.log(sumaTodo([1,2,NaN,'hola']))

}catch(error){
    console.log(error.message)
}

console.log("despues del error")