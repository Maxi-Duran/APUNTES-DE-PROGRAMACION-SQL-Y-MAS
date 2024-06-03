let collection= document.getElementsByTagName('p');

let list= document.querySelectorAll('p');

console.log(collection,list);

let item1=collection.namedItem('hola');

let item2=collection.item('0')

let item3=collection[0];
console.log(item3)

for(let el of collection)
        console.log(el)

let item10=list.item(3);
let item12=list[3];