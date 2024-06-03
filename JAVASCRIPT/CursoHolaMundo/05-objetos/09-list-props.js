const punto={
    x:10,
    y:15,
    dibujar(){
        console.log("dibujando")
    }
};
if('dibujar' in punto){
    punto.dibujar();
}

let keys=Object.keys(punto);


console.log(keys)           //con llave nos referimos a las propiedades del objeto
for (let llave of Object.keys(punto)){
    console.log(llave,punto[llave]);
}

for(let entry of Object.entries(punto)){ //otra forma de listar a las propiedas de uun objeto
    console.log(entry)
}
//codigo viejo



for (let llave in punto){
    console.log(llave,punto[llave])
}
