$(document).ready(function(){


    $("input").click(function(){
        $("div").find("span").each(function(indice){
            $(this).text("span numero: "+indice)
        })
    });
});