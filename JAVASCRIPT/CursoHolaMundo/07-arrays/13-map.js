const usuarios=[
    {edad:17,nombre:'maxi'},
    {edad:13,nombre:'brava'},
    {edad:25,nombre:'simba'},
    {edad:32,nombre:'gray'},
];

const lista=usuarios.map(u=>`<li>${u.nombre}</li>`);

const html= `<ol>${lista.join("")}</ol>`
console.log(lista)

console.log(html)







                            //no entendi bien
const mapped=usuarios.map(u=>({
        ...u,
        mayor:u.edad>17,
    
}));

console.log(mapped)