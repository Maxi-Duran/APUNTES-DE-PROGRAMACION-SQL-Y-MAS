
//crear una funcion para crear usuarios y no sea repetitivo

function crearUsuario(name,email){
    return{
        
        email,
        name,
        
        activo:true,
        recuperarClave: function(){
            console.log("Recuperando Clave")
        },
            
    }
}

let user1=crearUsuario('Maxi','maxi2')

console.log(user1)