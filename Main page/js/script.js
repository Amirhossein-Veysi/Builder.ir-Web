$(document).ready(function(){

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
    $('img').attr('draggable',false)

    // Projects

    let projects = [
        {
            name : 'وب سایت شخصی',
            url : '1353.ir',
            imageUrl : '1_1353.svg'
        },
        {
            name : 'خدمات طراحی سایت',
            url : 'sitebuilder.ir',
            imageUrl : '2_SiteBuilder.svg'
        },
        {
            name : 'باشگاه متخصصین ایران',
            url : 'expertclub.ir',
            imageUrl : '3_ExpertClub.svg'
        },
        {
            name : 'سامانه جامع اطلاع‌رسانی',
            url : 'hit.ir',
            imageUrl : '4_Hit.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی مدرسان ایران',
            url : 'modaresan.ir',
            imageUrl : '5_Modaresan.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی هواداران فوتبال',
            url : 'havadaran.ir',
            imageUrl : '6_Havadaran.svg'
        },
        {
            name : 'خدمات تخفیفی، اعتباری، تقسیطی',
            url : 'cashback.ir',
            imageUrl : '7_CashBack.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی بازارهای مالی ایران',
            url : 'freesignal.ir',
            imageUrl : '8_FreeSignal.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی کلیکرهای ایران',
            url : 'clicker.ir',
            imageUrl : '9_Clicker.svg'
        },
        {
            name : 'بازارگاه بزرگ ایرانیان',
            url : 'farabazar.ir',
            imageUrl : '10_Farabazar.svg'
        },
        {
            name : 'فروشگاه همیشه بیدار ایران',
            url : 'eshop724.ir',
            imageUrl : '11_eShop724.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی بازاریابان شبکه‌ای ایران',
            url : 'networkmarketing.ir',
            imageUrl : '12_NetworkMarketing.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی کاربران اینترنتی',
            url : 'karbar.ir',
            imageUrl : '13_Karbar.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی همزادان ایران',
            url : 'hamzad.ir',
            imageUrl : '14_Hamzad.svg'
        },
        {
            name : 'کافه سرگرمی',
            url : 'funcafe.ir',
            imageUrl : '15_FunCafe.svg'
        },
        {
            name : 'فوتبال فانتزی',
            url : 'fantasyfootball.ir',
            imageUrl : '16_FantasyFootball.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی آشپزهای ایران',
            url : 'potage.ir',
            imageUrl : '17_Potage.svg'
        },
        {
            name : 'پایگاه دانش ',
            url : 'asrandisheh.ir',
            imageUrl : '18_AsrAndisheh.svg'
        },
        {
            name : 'سامانه اطلاع‌رسانی تخفیف',
            url : 'rebate.ir',
            imageUrl : '19_Rebate.svg'
        },
        {
            name : 'جنبش کارآفرینی ملی',
            url : '2in1.ir',
            imageUrl : '20_2in1.svg'
        },
        {
            name : 'شبکه اجتماعی تخصصی دامینرهای ایران',
            url : '7025.ir',
            imageUrl : '21_7025.svg'
        },
    ]
    
    // Add projects to document

    for (let i = 0; i < projects.length; i++) {
        const element = projects[i]
        let a = document.createElement('a')
        if (element.url == '1353.ir' || element.url == 'sitebuilder.ir'){
            a.href = 'http://' + element.url
        }else{
            a.href = 'http://1353.ir/' + element.url
        }
        a.className = 'col-12 col-md-6 col-lg-4 my-5 project p-5 rounded'
        a.innerHTML = '<div class="comp"><div class="monitor"><img src="image/Projects/' + element.imageUrl + '"></div><div class="base"><div class="circle"></div><p class="laptop-footer">' + element.url + '</p></div></div><p class="text-center laptop-title px-1">' + element.name +'</p>'
        a.target = '_blank'
        $('.project-container').append(a)
    }

})