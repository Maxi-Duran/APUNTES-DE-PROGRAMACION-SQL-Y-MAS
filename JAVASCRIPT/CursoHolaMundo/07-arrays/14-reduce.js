const numeros=[1,2,3,4];

const suma=numeros.reduce((acc,el)=>{
    return acc+el;
},0)//0 es el acumulador el elemento es el primer elemento del array

console.log(suma)

const anidado=[[1,2],3,[4,5]];


const resultado=anidado
.reduce((acc,el)=>acc.concat(el),[])

console.log(resultado)

const usuarios=[
    {edad:17,nombre:'maxi'},
    {edad:13,nombre:'brava'},
    {edad:25,nombre:'simba'},
    {edad:32,nombre:'gray'},
];

const indexado =usuarios.reduce((acc,el)=>({
    ...acc,
    [el.nombre]:el,
}),{})

console.log(indexado)