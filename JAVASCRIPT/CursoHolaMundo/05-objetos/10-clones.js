let punto={
    x:10,y:15,
}
//primera forma
let clonePunto=Object.assign({},punto,{z:20},{e:103})

console.log(clonePunto)

//segunda forma
let copiaPunto=Object.assign({},punto)

console.log(copiaPunto)

//tercera forma
let copia3={ ...punto}

console.log(copia3)

//forma 4 no recomendable (antigua)
let copia4={};
for (let llave in punto){
    copia4[llave]=punto[llave]

}
console.log(copia4)