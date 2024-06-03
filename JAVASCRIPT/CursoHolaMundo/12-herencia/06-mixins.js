function mixin(ctr,...args){
    Object.assign(ctr.prototype,...args)
}


let vuela={
    vuela(){
        console.log('volando')
    }
}
let nadar={
    nada(){
        console.log('nadando')
    }
}
let bano={
    bano(){
        console.log('bañandose')
    }
}

function Pato(){}

function Perro(){}

function Pez(){ }
Object.assign(Pez.prototype,nadar,bano)
let p= new Pez();

function Avion(){}
mixin(Avion,vuela);
let a=new Avion();