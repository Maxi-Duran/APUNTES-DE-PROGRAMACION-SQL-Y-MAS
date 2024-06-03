function obt(array,idx){
    if(idx<=0){
        return "elemento no existe"
    }
    if(array.length<idx){
        console.log("Elemento no existe")
    }else{
        console.log("todo bien")
    }
}

obt([1,2],1);