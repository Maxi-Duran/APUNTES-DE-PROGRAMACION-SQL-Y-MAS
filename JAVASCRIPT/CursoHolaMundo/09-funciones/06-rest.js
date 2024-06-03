function suma(a,b,...rest){  //el parametro de rest debe ser el ultimo
    console.log(rest)
}

suma(1,2,3,4,5,6)

//fat arrow function

const suma2=(a,b,...rest)=>{  //el parametro de rest debe ser el ultimo
    console.log(rest)
}

suma2(1,2,3,4,5,6)

const logMsg=(desc,...msgs)=>{
    for(let msg of msgs){
        console.log(desc,msg)
    }
}

//logMsg('servidor', 'error1','peticion')

let mensajes=['error','peticion','error2']

logMsg('Cliente movil: ',...mensajes,' otro error') //aqui se puede agregar mas argumentos