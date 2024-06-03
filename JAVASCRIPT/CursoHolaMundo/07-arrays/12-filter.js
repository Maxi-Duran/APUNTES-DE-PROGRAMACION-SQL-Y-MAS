const usuarios=[
    {edad:17,nombre:'maxi'},
    {edad:13,nombre:'brava'},
    {edad:25,nombre:'simba'},
    {edad:32,nombre:'gray'},
];

const mayores= usuarios.filter((u)=>u.edad>17);

console.log(mayores)