// simplified version of changing the color of h1 to purple
// $("button").click(function(){
//     $("h1").css("color","purple");
// })

$(document).keydown(function(event){
    $("h1").text(event.key);
})