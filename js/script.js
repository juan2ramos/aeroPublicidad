$(function  () {

    var arrayColor = [6,7,8,9,'a','c','f']
    for(var i=0; i<=400; i++){
        var size = Math.round(Math.random()*(5 - 1));
        var color = Math.round(Math.random()*6)
        var star = document.createElement("div");
        star.style.color = '#'+arrayColor[color]+arrayColor[color]+arrayColor[color];
        star.style.fontSize  = size +"px";
        star.style.top = Math.round(Math.random()*window.innerHeight)-5 + "px";
        star.style.left = Math.round(Math.random()*window.innerWidth)-5 + "px";
        star.innerHTML = "&#9733";
        star.setAttribute("class","start");

        document.body.appendChild(star);
    }

    $('.solar-system li span').hover(function(){

        $(this).parents( 'li' ).toggleClass( 'paused' );

    });
    $('.solar-system li').on('click', function(){

        alert('jaja')

    });
    $('.spacecraft').on('click',function(){

        $('header').toggleClass('show-header');

    });



});