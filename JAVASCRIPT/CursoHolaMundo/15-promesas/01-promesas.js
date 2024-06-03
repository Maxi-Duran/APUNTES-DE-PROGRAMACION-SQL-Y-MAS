let promesa= new Promise((resolve,reject)=>{
    setTimeout(()=> reject('bien'),1000)
})


promesa.then(
    valor=>console.log(valor),
    e=>console.log('error',e)
)