function Punto(x,y){
    this.x=x;
    this.y=y;
    this.dibujar=function(){console.log("Dibujando");}
}




let punto={z:7,c:15}; //de esta forma extendemos los objetos
Punto.call(punto,1,2)  //.call agregamos la variable punto tomara el valor de this.x
console.log(punto)
//extendemos objetos

Punto.apply(punto,[1,2])  //lo mismo pero con array
console.log(punto)

