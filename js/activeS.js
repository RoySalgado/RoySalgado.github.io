$(document).ready(function(){
    $("#slippry").slippry({
        captions: false,
        pager: false
    });
    //detectar ancho y poner el valor en height
    var dn_width = $('.diamante').width();
    //Clase para el scroll en la barra de notificaciones
    var slider=$("#slider");
    $(window).scroll(function(){
        var scroll=$(window).scrollTop();
        if(scroll >= $("#nosotros").offset().top-200){
            $("#nav").addClass("nav-overlay");
        }else{
            $("#nav").removeClass("nav-overlay");
        }
    });
    $(window).scroll();
    $("path").addClass("actionStart");
});
