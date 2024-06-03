
//le pasaos un argumento
let promesa1= user =>new Promise((res,rej)=>{
    res(user);
});


let promesa2= user => new Promise((res,rej)=>{
    res(user+ 'holamaxi');
});

promesa1('maxi')
.then(user=>promesa2(user))
.then(dato=>console.log(dato))