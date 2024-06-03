function User(){
    this.name='maxio';
    //metodo de instancia
    this.logger=function(){
        console.log('logguendo')
        this.login();
    }
};
//metodo de prototipo
User.prototype.login=function(){
    console.log('Iniciando sesion',this.name);
    
}
const user1=new User();
const user2=new User()

console.log(user1)

