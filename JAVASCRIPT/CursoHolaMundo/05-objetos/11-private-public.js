function Usuario(){
    this.name='Nicolas';

    this.log=function(){
        console.log("Logging")

    }
    this.guardar=function(){
        this.log()                  //esto esta mal
        console.log("guardando")
    }
}

const usuario=new Usuario();

usuario.log=function(){
    console.log("lala");
}

usuario.guardar();

//private
function Usuario2(){
    this.name='maxi';

    let log=function(){
        console.log("loggin")  //de esta forma creado una propiedad o atributo privado
                                //que se utiliza solamente dentro del objeto
    }
    this.guardar=function(){
        log()                 
        console.log("guardando")
    }
}

const usuario2=new Usuario2();



usuario2.guardar();


