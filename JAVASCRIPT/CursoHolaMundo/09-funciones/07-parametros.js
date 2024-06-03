/**
 * {url:...
 * bucket: amazon s3
 * port: 80
 * }
 * 
 * 
*/
const config={
    url:'www.maxi.com',
    bucket:'145',
    port: 80
    

}
function configurarAPi(url,bucket=145,port=80){  //si queremos asignarle un valor por defecto,los siguients tambien tiene que se rpor defectos
    return `${url}/${bucket}:${port}`;
}


console.log(configurarAPi('www.maxi.com'))