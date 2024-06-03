//dentro de un objeto: this hace referencia a un objeto{}
//dentro de una funcion: this hace refencia al objeto window[],global
// si se usa new hace referencia al objeto que sera creado

//OBJETO:
const user={
    name:'nicolas',
    login(){
        console.log(this)
    }
}

user.logout=function logout(){
    console.log(this)
}
user.logout()


//FUNCION:
function log(){
    console.log(this)
}
log()

//NEW
function Log(mensaje){
    this.mensaje=mensaje
    console.log(this);

}
/**
 * se crea un objeto literal
 * se vincula este objeto a this
 * se vincula el prototipo
 * si no retorna nada,entonce retorna this
 */
const l=new Log('hola maxi')
