const entidad={
    save(){
        console.log('guardado de entidad')
    },
}

class User{
    constructor(name){
        this.name=name;
    }
}

const u=new User('maxi')

