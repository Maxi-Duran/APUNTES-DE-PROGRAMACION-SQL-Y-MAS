//function hola(){
  //  return 'hola maxi';

//}
//return implicito
const hola= (mensaje)=> mensaje+'hola maxis'     //anonima

//es lo mismo
const hola2= mensaje=> {
    return mensaje+'hola maxis'
}       
//funcion mas corta =>indica que es una funcion

console.log(hola('holitosss '))


let hola2s=()=>{
 return  'hola22'
}
let resultado= hola2s();
console.log(resultado)