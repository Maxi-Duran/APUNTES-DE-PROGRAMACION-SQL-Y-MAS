const letras= ['a','b']

//agregar al final
letras.push('c')

//agregar al comienzo
letras.unshift('y','z')

//agregar elementos entre start y end //colocamos ' pára indicar q no queremos elimnjar nada
letras.splice(3,0,'v')

console.log(letras)