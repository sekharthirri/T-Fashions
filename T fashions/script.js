
// preloader

$(window).on("load",function(){

$("#preloader_status").fadeOut();
$("#preloader").delay(350).fadeOut();
});

var myCarousel = document.querySelector('#myCarousel')
var carousel = new bootstrap.Carousel(myCarousel)


// navigation

$(function(){

    $(window).scroll (function(){   

            if($(window).scrollTop() > 250){
                
                $("nav").addClass("white-nav-top");

                $((".navbar-brand")).addClass("white-nav-top");

            }else{
                $("nav").removeClass("white-nav-top");

                $(".navbar-brand").removeClass("white-nav-top");
            }


    });


});