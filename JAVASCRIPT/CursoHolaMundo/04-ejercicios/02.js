function resolucion(ancho,alto){
    if( alto<720){
       console.log("falso")

    }else if(ancho>=1280 &&ancho<1920 &&alto >=720 ){
        console.log("HD")
    }else if(ancho>=1920 &&ancho<2560 &&alto >=1080 ){
    console.log("FULL HD")
    }else if(ancho>=2560 &&ancho<3840 &&alto >=1440 ){
    console.log("WQHD")    
    }else if(ancho>=3840 &&ancho<7680 &&alto >=2160 ){
    console.log("4K") 
    }else if(ancho>7680 &&alto >=4320 )
    console.log("8K")
    
}

resolucion(3840,2160);

