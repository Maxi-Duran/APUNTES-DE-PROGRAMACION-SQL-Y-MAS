let array=[2,5,7,15,-5,-100,55]

function get(arr){
    let menor=arr[0];
    let mayor=arr[0];
    for (numero of arr){
        menor=menor<numero?menor:numero
        mayor=mayor>numero?mayor:numero
    }
    return [menor,mayor]

}

let hola=get(array)

console.log(hola)