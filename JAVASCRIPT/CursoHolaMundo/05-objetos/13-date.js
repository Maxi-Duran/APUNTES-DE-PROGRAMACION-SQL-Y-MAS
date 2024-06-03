//hora actual de tu pc
const ahora=new Date();

console.log(ahora)

//mes,dia,año
const fecha=new Date('September 11 2002 ');
console.log(fecha)

//año,mes,dia,hora,minutos
const fecha2=new Date(2024,11,25,18,19)

console.log(fecha2)

console.log(fecha2.toDateString())
console.log(fecha2.toISOString()) //no favorable

console.log(fecha2.toTimeString())

console.log(ahora.getMonth())