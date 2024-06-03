function findFirstRepeated(gifts) {
  let guardar=[];
  
    
  for (let gift of gifts){
   if(!guardar.includes(gift)){
    guardar.push(gift)
    
   }else{

    return gift
    
   }
  
  }
  return -1
  

  }
  

 // const giftIds = [2, 1, 3, 5, 3, 2]
 // const firstRepeatedId = findFirstRepeated(giftIds)
  //console.log(firstRepeatedId) // 3 


  //reto 2

  function manufacture(gifts, materials) {
    const guardar=[];
    materials=materials.split('')
    for(let gift of gifts){
      let canMake = true;
      
      for (let letra of gift) {
        if (!materials.includes(letra)) {
          
          canMake = false;
          break;
        }
      }
      
      if (canMake) {
        guardar.push(gift);
      }
   
    }
   
     return guardar                                   
  }
 

//reto 3

function findNaughtyStep(original, modified) {
  let letra = ''; // Valor predeterminado
  
  modified = modified.split('');
  original = original.split('');
  
  for (let m of modified) {
    if (!original.includes(m)) {
      letra = m;
      break; // Salir del bucle una vez que se encuentra una letra no presente en original
    }
  }
  
  if (letra === '') { // Si no se encontró ninguna letra en modified que no esté en original
    for (let o of original) {
      if (!modified.includes(o)) {
        letra = o;
        break; // Salir del bucle una vez que se encuentra una letra no presente en modified
      }
    }
  }

  return letra;
}

const original = 'abcd';
const modified = 'abcd';
console.log(findNaughtyStep(original, modified)); // ''



