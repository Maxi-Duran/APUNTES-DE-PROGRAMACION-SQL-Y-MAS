//objeto dinamico

const user ={ id:1};

user.name='MAxi';
user.guardar=function(){
    console.log('Guardando',user.name);
}

user.guardar();

//al hacerlo constante no podemos cambiar el valor de la variable
// pero si es un objeto si podemos cambiarle el valor

delete user.name;   //eliminar una variable
delete user.guardar;
console.log(user)

const user1 =Object.freeze({id:1})//no podemos cambiar id aunque sea un objetio
const user2 =Object.seal({id:1}) //podemos cambiarle la propiedad pero no agregar mas
user1.name='maxi'

console.log(user1)