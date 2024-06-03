const url='https://jsonplaceholder.typicode.com/todos';

fetch(url,{
    method:'POST',
    body: JSON.stringify({title:'hola mundo'}),
    headers:{
        'Content-Type':'Application/json',  //para que tomen en cuenta el string de arriba
        Authorization:'api key'
    }
})
    .then(response=>{
        //return response.json()
        //return response.text()
        if(response.ok){
            return response.text()
        }
        return Promise.reject(response.status)
    })
    .then(data=>console.log(data))
    .catch(mensaje=>console.log(mensaje))