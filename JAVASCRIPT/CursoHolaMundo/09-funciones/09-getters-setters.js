const usuario={
    nombre:'maxi',
    apellido:'duran',
    get nombrecompleto(){ //podemos acceder a el como si fuera una propiedad
        return usuario.nombre +' '+ usuario.apellido
    },
    set nombrecompleto(valor){
        const[nombre,apellido]=valor.split(' ')
        this.nombre=nombre
        this.apellido=apellido
    }
};
usuario.nombrecompleto='maxito duran'
console.log(usuario.nombrecompleto)