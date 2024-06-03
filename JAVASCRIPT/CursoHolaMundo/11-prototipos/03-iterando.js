function User(){
    this.name='maxio';
    
    };

User.prototype.login=function(){
    console.log('Iniciando sesion',this.name);
    
}

let user=new User();

for(let prop in user){
    if(user.hasOwnProperty(prop))//para preguntar si user tiene alguna propiedad dentro de su funcion
    console.log(prop)
}

console.log(Object.keys(user))