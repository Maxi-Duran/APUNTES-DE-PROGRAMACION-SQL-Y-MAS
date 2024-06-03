let span= document.getElementById('hola-mundo')
let drop=document.getElementById('drop')

drop.ondragenter = e=>{
    e.target.style.background='yellow';
   
}

drop.ondragleave=e=>{
    e.target.style.background='';
}
drop.ondragover=e=>{
    e.preventDefault();
}
drop.ondrop=e=>{
  

    e.target.appendChild(document.getElementById('hola-mundo'))
}