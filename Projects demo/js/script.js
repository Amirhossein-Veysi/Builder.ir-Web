$(document).ready(function(){

    //Changes that burn when page scrolled (Almost for navbar)
    $(window).scroll(function(){
        if ($(window).scrollTop() > 10){
            $('.navbar').addClass('dark').css({
                'background' : 'rgba(0,0,0,0.7)',
                'backdrop-filter' : 'blur(2px)',
                'height' : '60px',
                'box-shadow' : '0 0 7px #333',
                'color' : '#fff'
            })
        }else{
            $('.navbar').removeClass('dark').css({
                'background' : 'none',
                'backdrop-filter' : 'unset',
                'height' : '90px',
                'box-shadow' : 'none',
                'color' : '#333'
            })
        }
    })
    
    // Make images undraggable
    $('img').attr('draggable',false)


    // form validation

    let emailRegEx = /[0-9a-zA-Z]+\@+[a-z]+\.+['com']/

    $('form').submit(event =>{
        if ( $('#email').val() == '' ){
            event.preventDefault()
            $('.alert').html('لطفا ایمیل خود را وارد کنید').css('opacity', '1');
            setTimeout(function(){
                $('.alert').css('opacity', '0');
            }, 1500);
        }else if( !emailRegEx.test($('#email').val()) ){
            event.preventDefault()
            $('.alert').html('لطفا یک ایمیل معتبر وارد کنید').css('opacity', '1');
            setTimeout(function(){
                $('.alert').css('opacity', '0');
            }, 1500);
        }
    })

})