
function Entidad(){}

Entidad.prototype.save=function() {
    console.log('guardando',this.name)
}

function User(){}
//SOBREESCRITURA  METHOD OVERRIDE
User.prototype.save=function(){
    console.log('Guardando desde user')
}

Object.setPrototypeOf(User.prototype,Entidad.prototype);


const u=new User();


console.log(Object.getPrototypeOf(Object.getPrototypeOf(u)).save());
 