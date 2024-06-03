let usuarios=[
    {id: 1,activo:true},
    {id: 2,activo:false},
    {id: 3,activo:false},

];

let todos=usuarios.every(u=>{
    console.log('todos activos',u.id);
    return u.activo;
});
console.log(todos)



let algunos=usuarios.some(u=>{
    console.log(u.id)
    return u.activo
})
console.log(algunos)