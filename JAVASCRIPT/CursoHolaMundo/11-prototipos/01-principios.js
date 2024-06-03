//ENCAPSULACION

const user={
    nombre:'hola',
    apellido:'maxi',
    getNombreCompleto(){
        return [this.nombre,this.apellido].join(' ');
    }
};

console.log(user.getNombreCompleto())

//ABSTRACCION

const user2=new User();

user.password='maxito';
user.save();

//Herencia
/*usuario:id,name,guardar();
User: extends usuario
Restaurante: extends usuario
Motociclista: extends usuario
*/

//Poliformismo
function validaEntidad(entidad){
    switch(entidad.nombre){
       case 'user':
        entidad.save();
        break
       case 'restaurante':
        entidad.guardar();
        break
    }
}


