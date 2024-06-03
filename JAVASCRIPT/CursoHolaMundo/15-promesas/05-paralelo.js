const p1=Promise.reject(3);
const p2=42; //se considera promesa al entrar en el call
const p3= new Promise((res,rej)=>{
    setTimeout(res,1000,'foo');
});

//Promise.all([p1,p2,p3])
  //  .then(valores=>console.log('all',valores))
   // .catch(e=>console.log('error en el all',e))


    
//Promise.race([p1,p2,p3])
//        .then(valores=>console.log('race',valores))
//        .catch(e=>console.log('error en el race',e))

//Promise.any([p1,p2,p3])
  //    .then(valores=>console.log('any',valores))
    //    .catch(e=>console.log('error en el any',e))


Promise.allSettled([p1,p2,p3])
    .then(valores=>console.log('settled',valores))
    .catch(e=>console.log('error en el settled',e))