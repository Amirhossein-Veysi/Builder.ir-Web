$(document).ready(function () {
    //Variable
    let navItmLnks = $('.nav .nav-item .nav-link');
    let sections = $('section');

    //Event Listener
    $(window).on('load', dtctTrgtByHash);
    navItmLnks.on('click', deNavItmLnksClckHandler);
    $('.works .work .layer div .zoom-it').on('click', deWorkZomItClckHandler);
    $('.works .work .layer div .details').on('click', deWorkDtilsClckHandler);
    $('.container-fluid .close').on('click', mdlClsClckHandler);
    $('.section-control .prev-section').on('click', goPrevSctcn);
    $('.section-control .next-section').on('click', goNxtSctcn);
    $(document).on('keydown', deKyPrsHandler);

    //Event Handler
    function dtctTrgtByHash() {
        let element = window.location.href.split('#');
        let target = $(`.nav .nav-item a[href="#${element[1]}"]`);
        if (element[1]) {
            mkItmActv(target, element);
        }
    }

    function deNavItmLnksClckHandler() {
        let target = $(this);
        let sectionTarget = target.attr('href').split('#');
        mkItmActv(target, sectionTarget);
        window.location.href = target.attr('href');
    }

    function mdlClsClckHandler() {
        $(event.currentTarget).closest('.container-fluid').addClass('d-none');
    }

    function deWorkZomItClckHandler() {
        $('#galleryModal').removeClass('d-none');
        event.preventDefault();
    }

    function deWorkDtilsClckHandler() {
        $('#workModal').removeClass('d-none');
        event.preventDefault();
    }

    function goPrevSctcn() {
        //Store the current nav item
        let current = $('header .nav .active');
        //Active the previous item of current one
        if (current.prev().length) {
            current.prev().find('.nav-link').trigger("click");
        } else {
            navItmLnks[navItmLnks.length - 1].click();
        }
    }

    function deKyPrsHandler() {
        if (event.keyCode == 39) goPrevSctcn();
        if (event.keyCode == 37) goNxtSctcn();
    }

    function goNxtSctcn() {
        //Store the current nav item
        let current = $('header .nav .active');
        //Active the previous item of current one
        if (current.next().length) {
            current.next().find('.nav-link').trigger('click');
        } else {
            navItmLnks[0].click();
        }
    }

    //Function
    function wrtMe() {
        $('.about-txt').typeIt('مشاور و مربی کسب‌وکار', .3).pauseIt(1).deleteIt($('.about-txt').html().length, .1)
            .typeIt(' مدیر رویداد و جامعه‌ساز', .3).pauseIt(1).deleteIt($('.about-txt').html().length, .1)
            .typeIt(' مجری کسب‌وکارهای آنلاین', .3).pauseIt(1).deleteIt($('.about-txt').html().length, .1);
        setTimeout(wrtMe, 5000);
    }

    function mkItmActv(target, sctnTrgt) {
        sections.removeClass('active'); //Global Varibale
        $('.nav .nav-item').removeClass('active')
        target.parent().addClass('active');
        $(`#${sctnTrgt[1]}`).addClass('active');
    }

    wrtMe();
});