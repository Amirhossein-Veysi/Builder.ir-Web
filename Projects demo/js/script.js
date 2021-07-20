$(document).ready(function(){

    //Changes that burn when page scrolled (Almost for navbar)
    $(window).scroll(function(){
        if ($(window).scrollTop() > 10){
            $('.navbar').addClass('dark').css({
                'background' : 'rgba(0,0,0,0.7)',
                'backdrop-filter' : 'blur(2px)',
                'height' : '60px',
                'box-shadow' : '0 0 7px #333'
            })
            if ($(window).width() <= 767){
                $('.navbar-collapse').css({
                    'background' : 'rgba(0,0,0,0.7)',
                    'backdrop-filter' : 'blur(2px)',
                })
            }else{
                $('.navbar-collapse').css({
                    'background' : 'unset',
                    'backdrop-filter' : 'unset',
                })
            }
        }else{
            $('.navbar').removeClass('dark').css({
                'background' : 'none',
                'backdrop-filter' : 'unset',
                'height' : '90px',
                'box-shadow' : 'none'
            })
            if ($(window).width() <= 767){
                $('.navbar-collapse').css({
                    'background' : 'unset',
                    'backdrop-filter' : 'unset',
                })
            }
        }
    })
    
    // Make images undraggable
    $('img').attr('draggable',false)
})