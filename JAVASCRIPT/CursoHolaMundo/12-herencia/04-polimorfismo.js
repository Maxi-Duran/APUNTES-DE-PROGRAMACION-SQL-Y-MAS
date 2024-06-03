function Select(){}

Select.prototype.render=function(){
    console.log("Renderizando")
}

function Checkbox(){}

Checkbox.prototype.render=function(){
    console.log("Renderizando checkbox")
}

let componentes =[
    new Select(),
    new Checkbox(),
]

componentes.forEach(c=>c.render())