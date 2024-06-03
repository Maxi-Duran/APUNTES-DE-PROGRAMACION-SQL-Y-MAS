 let form=document.getElementById('form')
let errorname=document.getElementById('errorname')
let errorlastname=document.getElementById('errorlastname')

 form.addEventListener('submit',e=>{
    e.preventDefault();
   let data= Array.from(e.target.elements).reduce((acc,el)=>{
    if (!el.name) return acc;
    acc[el.name]=el.value;
    return acc;
   },{})
        if(data.name.length<=0){
            console.log('mal')
          
        }
       

   
})

