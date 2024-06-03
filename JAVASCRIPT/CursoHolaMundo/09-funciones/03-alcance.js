let afuera='estoy afuera'


function alcance(){
    console.log(afuera)
    afuera='estoy dentro'
    function saludo(){}
    var vieja='ya no usar';
    let variable='hola max'         
    const constante ='Hola maxito';
}
//el alcance es hasta funcion,no se puede llamar desde afuera de la funcion
/*console.log(saludo)
    console.log(vieja)
    console.log(variable)
    console.log(constante)
    */

console.log(afuera);

alcance();

console.log(afuera)