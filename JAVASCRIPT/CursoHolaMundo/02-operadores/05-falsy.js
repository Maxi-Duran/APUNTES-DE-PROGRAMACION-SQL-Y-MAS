//short-sircuit

//falso
//false
//0
//''
//null
//undefined
//NaN

let nombre='Maxi';
let username=nombre||'Anonimo';
console.log(username)

function fn1(){
    console.log('Siooy funcion1')
    return false
}

function fn2(){
    console.log('Siooy funcion2')
    return true
}

let x= fn1()&&fn2()