class Restaurants {
    constructor(name){
        this.name=name;
    }
    getTimetable(){
        console.log('Horario restaurante')
    }
    static getRestaurant(id){
        return new Restaurants('bbq')
    }
}

const r= Restaurants.getRestaurant(12)  //metodo estatico




console.log(r)
   
