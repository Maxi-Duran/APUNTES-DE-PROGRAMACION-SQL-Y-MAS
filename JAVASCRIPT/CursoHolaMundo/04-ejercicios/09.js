let pairs=[
    [1,{name: "maxi"}],
    [2,{name: "gray"}],
    [3,{name: "simba"}],
];

function coleccion(arr){
    a=[];
    for(let i in arr){
        let elemento=arr[i]
        a[i]=elemento[1];
        a[i].id=elemento[0];
    }
    return arr

}

let resultado=coleccion(pairs);
console.log(resultado)