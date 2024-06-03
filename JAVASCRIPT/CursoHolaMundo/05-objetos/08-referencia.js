let a=1;
let b=a

b++;

console.log(a,b) //1,2



let aa={};
let bb=aa

bb.prop=1;

console.log(aa,bb) //1,1   evaluan la direccion en la RAM

let as=1;
function suma(n){
    n++;
}
                //javascript considera que as y n son variabvles distintas
suma(as)
console.log(as)


let ad={prop:1};
function suma(n){
    n.prop++;
}
              
suma(ad)
console.log(ad)