let arr1=[1,2];
let arr2=[5,6];

let arr3=[...arr1,3,4,...arr2,7,8];  //toma todos los elementos del array 1
          //y se puede agregar mas arrays

let arr4 =[...arr3]

arr3.pop();
console.log(arr3,arr4)