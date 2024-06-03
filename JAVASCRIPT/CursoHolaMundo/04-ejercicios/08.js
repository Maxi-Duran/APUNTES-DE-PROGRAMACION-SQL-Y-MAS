let array=[{
    id:1,
    name:'MAXI'
}, {
    id:2,
    name:'simba',
}, {
    id:1,
    name:'gray',
}];

let paress=[];
function pares (arr){
    for(let i in arr){
        let elemento=arr[i];
        paress[i]= [elemento.id,elemento.name]
    }
    return paress
}
let resultado=pares(array);
console.log(resultado)