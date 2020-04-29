//visualizzare hamburger menu su mobile

//al click sull icona il menu appare con una leggera transizione(200)
$(".fa-bars").click(function() {
    $('.hamburger-menu').show(200);
});
//al click sull icona il menu scompare con una leggera transizione(200)
$('.close').click(function(){
    $('.hamburger-menu').hide(200);
});
