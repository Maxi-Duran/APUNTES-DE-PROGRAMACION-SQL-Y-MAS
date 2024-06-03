function Usuario(nombre){ //las funciones tambien son objetos
                        //se hacen llamar objetos de primera clase
    this.nombre=nombre ;
}

console.log(Usuario.name)  //nos indica el nombre de la funcion
console.log(Usuario.length)//nos indica el largo de la funcion

const U=Usuario

let user=new U('Maxi')

console.log(user,"si");

function of(Fn,arg){
    return new Fn(arg);
}

let user2=of(Usuario,'mAXssI')
console.log(user2)

function returned(){
    return function(){
        console.log("hola mundo")
    }
}

let saludo =returned();
saludo();