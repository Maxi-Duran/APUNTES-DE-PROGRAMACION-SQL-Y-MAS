let nombre= "Tanjiro"
let anime="Demon slayer"
let edad= 16;

let personaje= {
    nombre: "tanjiro",
    anime: "demon slayer",      //estamos creando un objeto
    edad: 16 ,                   //dentro de las llaves estan las variables
    
    
};    

console.log(personaje.nombre);          //ya podemos acceder a las propiedas
console.log(personaje['nombre']);     //otra forma de acceder

personaje.edad=13;          //cambiar el valor de la propiedad

delete personaje.anime  //eliminar una propiedad

console.log(personaje)