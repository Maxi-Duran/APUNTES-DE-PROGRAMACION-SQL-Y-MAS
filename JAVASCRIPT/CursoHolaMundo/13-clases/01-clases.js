/*function User(name){
    this.name=name;
    this.instancia=function(){}
}

User.prototype.login=function (){
    console.log('Hola mundo')
}*/

class User {
    constructor(name){
        this.name=name;
        this.instancia=function(){}
    }
    activo=true;
    logout=()=>{            //no determina si es un metodo o propiedad
        console.log('logout')
    }    
    login(){
        console.log('Logueando')//se agregan al prototipo
    }
}
const u= new User('maxito')

console.log(u)