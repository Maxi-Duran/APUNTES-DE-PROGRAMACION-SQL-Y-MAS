function User(){
    this.name= 'Hola mundo'

}

function Product(){
    this.name='producto'
}

function Entidad(){}//funciones que heredaran

Entidad.prototype.save=function(){
    console.log('guardando',this.name);//funciones que heredaran
}
Entidad.prototype.validate=function(){
    console.log('validando',this.name);//funciones que heredaran
}
//PRIMERA OPCION
//User.prototype=Entidad.prototype; //primera opcion para que user herede lo de entidad
//User.prototype.constructor=User; //cambiar el constructor
//SEGUNDA OPCION
//User.prototype=Object.create(Entidad.prototype) //segunda opccion
//User.prototype.constructor=User //le asignamos o cambiamos un constructor

//TERCERA OPCION CON ECMASCRIPT6 la mejor opcion
Object.setPrototypeOf(User.prototype,Entidad.prototype);
const user=new User();
console.log(user)