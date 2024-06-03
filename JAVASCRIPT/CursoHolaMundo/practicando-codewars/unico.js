function findUniq(arr) {
    arr.sort()
    
    console.log(arr)
    
        if(arr[0]!=arr[1]){
            return arr[0]
        }else{
            return arr.pop()

        }

    
   

    
  }
  

console.log(findUniq([1, 110, 110]))