let form=document.getElementById('form')
let input=document.getElementById('input')
let button=document.getElementById('button');
form.onmouseleave= e =>{
    console.log('entra el mouse',e)
}


input.onchange=e=>{
    console.log("clickeando",e.target.value)
}

button.onclick=e=>{
   
    console.log("clockeando")
}


button.addEventListener('click',e=>{
   
    console.log("clockeando")
})