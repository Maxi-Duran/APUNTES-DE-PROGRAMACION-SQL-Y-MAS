function findOutlier(integers){
    let impar=0;
    let par=0;
    let mayor=[]
    for(n of integers){
        if(n%2==1 || n<0){
             impar++
            
    }else{
        par++
        
       
    }
}
    
    if(impar<par){
        for(n of integers){
            if(n%2==1){
                mayor.push(n)
            }
        }
    }else{
        for(n of integers){
            if(n%2==0){
                mayor.push(n)
            }
        }
    }
        

  
 
 return Math.max(...mayor)
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))
