$(document).ready(function(){

    let x = Math.floor(Math.random() * 49) + 1;
    let y = Math.floor(Math.random() * 49) + 1;

    let canvas = document.getElementsByTagName('canvas')[0];
    let ctx = canvas.getContext("2d");
    ctx.font = "16px Arial";
    ctx.direction = "ltr";
    ctx.fillText(`${x} + ${y} =`, 5, 30);

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

    let emailRegEx = /[0-9a-zA-Z]+\@+[a-z]+\.+['com']/;

    $('form').submit(event =>{
        if ($('.alert-success')) $('.alert-success').css('display', 'none');
        $('.form-group .dropdown-menu').removeClass('show');
        if ( $('#email').val() == '' ){
            event.preventDefault();
            $('.alert-danger').html('لطفا ایمیل خود را وارد کنید').css('opacity', '1');
        }else if( !emailRegEx.test($('#email').val()) ){
            event.preventDefault()
            $('.alert-danger').html('لطفا یک ایمیل معتبر وارد کنید').css('opacity', '1');
        }else if(Number($('#cap').val()) !== x + y){
            event.preventDefault();
            $('.alert-danger').html('اشتباه! لطفا محاسبه را دوباره انجام دهید').css('opacity', '1');
        }
    })

    $('.form-group .btn-light').on('click', deDrpDwnHandler);

    function deDrpDwnHandler(){
        $('.form-group .dropdown-menu').toggleClass('show');
    }

    $(document).on('click', {foo : 'bar'} ,deDmClcHandler)

    function deDmClcHandler(event){
        if (!event.target.matches('.dropdown-menu')){
            if(!event.target.matches('.dropdown-item')){
                if(!event.target.matches('input')){
                    if (!event.target.matches('canvas')){
                        if (!event.target.matches('.btn')){
                            if ($('.form-group .dropdown-menu').hasClass('show')){
                                $('.form-group .dropdown-menu').removeClass('show');
                            }
                        }
                    }
                }
            }
        }
    }
    
})