$(document).ready(function(){
//     if($(window).scrollTop()>15){
//         $(".fixed-top").css("background-color","white");
//     }
//     else{
//         $(".fixed-top").css("background-color","unset");
//     }
//     $(window).scroll(function(){
//         if($(window).scrollTop()>15){
//             $(".fixed-top").css("background-color","white");
//         }
//         else{
//             $(".fixed-top").css("background-color","unset");
//         }
//     })
    $(".search").click(function(){
        if($(".search-hidden").hasClass("d-none")){
            $(".search-hidden").removeClass("d-none");
        }
        else{
            $(".search-hidden").addClass("d-none");
        }
    });
    $(".accordion label>span").click(function(){
        $(this).parent().children("input").click();
    })
});