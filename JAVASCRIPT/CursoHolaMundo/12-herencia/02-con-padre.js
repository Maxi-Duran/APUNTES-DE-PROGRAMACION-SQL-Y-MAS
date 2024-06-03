function Entidad(entidad){
    this.id=Math.random().toString('20')//algo general al generar ids
    this.entidad=entidad
}


function User(){
    Entidad.call(this,'user');
}

const u=new User();

console.log(u)