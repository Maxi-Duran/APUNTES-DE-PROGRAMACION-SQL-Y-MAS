let numeros=[15,10,-3];

numeros.sort();
numeros.reverse();

console.log(numeros)

let letras=['z','a','d'];

letras.sort()

console.log(letras)

let conMayusculas=['Z','a','d']

conMayusculas.sort();

console.log(conMayusculas)  //Z , a ,d
//debido al ascii el Z es menor que a


//si no queremos que suceda lo anterior tenemos que hacer lo siguiente
let usuarios=[
    {edad:15,nombre:'Maxi'},
    {edad:25,nombre:'gray'},
    {edad:13,nombre:'simba'},
    
];
//usando el arrow function
usuarios.sort((a,b)=>{
    if(a.edad<b.edad){
        return -1
    }
    if (a.edad>b.edad){
        return 1
    }
    return 0
}
)

console.log(usuarios)