var number = function(busStops){

    let final=0;
    for(i of busStops){
        final=final+i[0]
        final=final-i[1]
    }
    return final
  }


console.log(number([[10,0],[3,5],[5,8]]))