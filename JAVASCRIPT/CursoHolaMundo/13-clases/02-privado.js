/*function User(a){
    let name =a;
    this.getName=function(){return name;}
}
*/
class User{
    #name;  //de esta forma le decimos que es privado
    constructor(name){
        this.#name=name;

    }
    #logger(){

    }
    getName(){
        this.#logger();
        return this.#name;  //para acceder a un miembro privado
    }
}
const u =new User('Maxito')

console.log(u)
// solo podemos acceder desde la clase, no de la instancia