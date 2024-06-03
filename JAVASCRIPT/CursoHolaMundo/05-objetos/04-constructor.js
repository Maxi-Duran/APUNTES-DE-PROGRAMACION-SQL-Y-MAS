//constructores
//funciones constructoras
function Usuario(){
    this.id=1;   //THIS
    this.recuperarClave= function(){   //metodos
        console.log("Recuperando clave...");
    }
}

let usuario =new Usuario() //creamos un objeto //NEW

console.log(usuario)

//no es una funcion, es un metodo:un metodo es una funcion que fue asignada a una propiedad de un objeto