$(document).ready(function(){

    //! Variable
    let emailRegEx = /[0-9a-zA-Z]+\@+[a-z]+\.+['com']/;
    let projects;
    let x,y;

    //Changes that burn when page scrolled (Almost for navbar)
    $(window).scroll(function(){
        if ($(window).scrollTop() > 10){
            $('meta')[2].content = '#333'
            $('.navbar').css({
                'background' : 'rgba(0,0,0,0.7)',
                'backdrop-filter' : 'blur(2px)',
                'height' : '60px',
                'box-shadow' : '0 0 7px #333'
            })
        }else{
            $('meta')[2].content = '#fff'
            $('.navbar').css({
                'background' : 'none',
                'backdrop-filter' : 'unset',
                'height' : '90px',
                'box-shadow' : 'none'
            })
        }
    })

    // Make images undraggable
    $('img').attr('draggable',false);

    // Projects

    loadJson('js/projects.json').then(res => {
        projects = res;
    }).then(() => {
        // Add projects to document

        projects.forEach(element => {
            let a = document.createElement('a');
            if (element.url == '1353.ir' || element.url == 'SiteBuilder.ir'){
                a.href = 'https://' + element.url;
            }else{
                let url = element.url.split('.');
                url.pop();
                a.href = 'https://1353.ir/' + url;
            }
            a.className = 'col-12 col-md-6 col-lg-4 my-5 project p-5 rounded';
            a.innerHTML = '<div class="comp"><div class="monitor"><img src="image/Projects/' + element.imageUrl + '"></div><div class="base"><div class="circle"></div><p class="laptop-footer">' + element.url + '</p></div></div><p class="text-center laptop-title px-1">' + element.name +'</p>';
            a.target = '_blank';
            $('.project-container').append(a);
        });
    });

    // form validation

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
            gnrtCptcha();
        }
    });

    // Generates the captcha code
    function gnrtCptcha() {
        x = Math.floor(Math.random() * 49) + 1;
        y = Math.floor(Math.random() * 49) + 1;

        let canvas = document.getElementsByTagName('canvas')[0];
        let ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "16px Arial";
        ctx.direction = "ltr";
        ctx.fillText(`${x} + ${y} =`, 5, 30);
    }

    gnrtCptcha(); //Call once the page loads to generate captcha code

})

//! Function

async function loadJson(url) {
    let response = await fetch(url);

    let res = await response.json();

    return res;
}