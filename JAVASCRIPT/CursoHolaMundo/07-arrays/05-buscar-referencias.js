const usuarios=[
    {id:1,name:'maxi'},
    
    {id:2,name:'maxi2'}, 

];
//si buscamos un indexof en un objeto ya creado nos arrojara falso
//const resultado=usuarios.indexOf({id:1,name:'maxi'});

const resultado=usuarios.findIndex(usuario=>
    usuario.name==='maxi2');
console.log(resultado);