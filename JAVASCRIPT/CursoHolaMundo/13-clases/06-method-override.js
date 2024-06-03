class Entidad{
    constructor(id){
        this.id=id
        this.created_at=new Date();
 }
        save(){
            
            console.log('save en entidad')
        }
}

class User extends Entidad{
    constructor(name){
        super(1);
        this.name=name;
}
    save(){
        super.save();  //llamaos al save de super osea entidad
    console.log('save en user')
}
}

let u=new User('maxi')

console.log(u)