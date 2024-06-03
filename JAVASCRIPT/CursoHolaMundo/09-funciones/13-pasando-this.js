function saludar(...rest){
    console.log(this,rest)
}
saludar.call({propiedad: 'hola'},1,5)  
saludar.apply({propiedad: 'hola'},[1,5])
// la difrencia es que en aply le tienes que pasar los arguemntos como un array

saludar.bind({propiedad: 'hola'})(3,5);

//del ejerccio anterior con bind
const usuario={
    nombre:'nicolas',
    ciudadanias:['Chile','colombia','canadiense'],
    mostrarCiudadanias(){
        let self=this;
       this.ciudadanias.forEach(function(ciudadania){
        console.log(self.nombre,ciudadania)
       }.bind(this));
    }
}
usuario.mostrarCiudadanias();