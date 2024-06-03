const usuario={
    nombre:'nicolas',
    ciudadanias:['Chile','colombia','canadiense'],
    mostrarCiudadanias(){
       this.ciudadanias.forEach(ciudadania=>{
        console.log(this.nombre,ciudadania)
       });
    }
}
usuario.mostrarCiudadanias();