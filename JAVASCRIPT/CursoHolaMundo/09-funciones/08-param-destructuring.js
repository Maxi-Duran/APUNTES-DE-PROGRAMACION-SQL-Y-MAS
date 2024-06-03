const config={
    url:'www.hola.com',
    direccion:{
        calle:'holamaxi',
        numero:80,
    }
}


//ahora con array

/*const config=[
    'www.maxi.com',145,80
]
  */ 
function webserver({url,...rest}){
    
    //const {url} =config;
    return url
}

console.log(webserver(config))