$(document).ready(function () {
  //Variable
  let navItmLnks = $(".nav .nav-item .nav-link");
  let sections = $("section");
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      // examine new nodes, is there anything to highlight?

      for (let node of mutation.addedNodes) {
        // we track only elements, skip other nodes (e.g. text nodes)
        if (!(node instanceof HTMLElement)) continue;

        // check the inserted element for being a code snippet
        if (node.matches('.work')) {
          $(node).find('.zoom-it').on('click', deWorkZomItClckHandler);
        }
      }
    }
  });

  let demoElem = document.querySelector("#works .row");

  observer.observe(demoElem, { childList: true, subtree: true });

  //Event Listener
  $(window).on("load", dtctTrgtByHash).on("load", addWorks);
  navItmLnks.on("click", deNavItmLnksClckHandler);
  $(".works .work .layer div .details").on("click", deWorkDtilsClckHandler);
  $(".container-fluid .close").on("click", mdlClsClckHandler);
  $(".section-control .prev-section").on("click", goPrevSctcn);
  $(".section-control .next-section").on("click", goNxtSctcn);
  $(document).on("keydown", deKyPrsHandler);

  //Event Handler
  function dtctTrgtByHash() {
    let element = window.location.href.split("#");
    let target = $(`.nav .nav-item a[href="#${element[1]}"]`);
    if (element[1]) {
      mkItmActv(target, element);
    }
  }

  function deNavItmLnksClckHandler() {
    let target = $(this);
    let sectionTarget = target.attr("href").split("#");
    mkItmActv(target, sectionTarget);
    window.location.href = target.attr("href");
  }

  function mdlClsClckHandler() {
    $(event.currentTarget).closest(".container-fluid").addClass("d-none");
  }

  function deWorkZomItClckHandler() {
    event.preventDefault();
    $("#galleryModal").removeClass("d-none");
    $('#gallery .carousel-inner .carousel-item').removeClass('active');
    console.log($(`#gallery .carousel-inner .carousel-item[data-order="${$(this).data('order')}"`));
    $(`#gallery .carousel-inner .carousel-item[data-order="${$(this).data('order')}"`).addClass('active');
  }

  function deWorkDtilsClckHandler() {
    $("#workModal").removeClass("d-none");
    event.preventDefault();
  }

  function goPrevSctcn() {
    //Store the current nav item
    let current = $("header .nav .active");
    //Active the previous item of current one
    if (current.prev().length) {
      current.prev().find(".nav-link").trigger("click");
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
    let current = $("header .nav .active");
    //Active the previous item of current one
    if (current.next().length) {
      current.next().find(".nav-link").trigger("click");
    } else {
      navItmLnks[0].click();
    }
  }

  //Function
  function wrtMe() {
    $(".about-txt")
      .typeIt("مشاور و مربی کسب‌وکار", 0.3)
      .pauseIt(1)
      .deleteIt($(".about-txt").html().length, 0.1)
      .typeIt(" مدیر رویداد و جامعه‌ساز", 0.3)
      .pauseIt(1)
      .deleteIt($(".about-txt").html().length, 0.1)
      .typeIt(" مجری کسب‌وکارهای آنلاین", 0.3)
      .pauseIt(1)
      .deleteIt($(".about-txt").html().length, 0.1);
    setTimeout(wrtMe, 5000);
  }

  function mkItmActv(target, sctnTrgt) {
    sections.removeClass("active"); //Global Varibale
    $(".nav .nav-item").removeClass("active");
    target.parent().addClass("active");
    $(`#${sctnTrgt[1]}`).addClass("active");
  }

  wrtMe();
});

function addWorks() {
  loadJson("js/projects.json").then((res) => {
    res.forEach((el, i) => {
      let work = `
            <div class="work col-6 col-md-4 col-lg-1 mt-4 d-flex justify-content-center">
                <img src="img/Projects/${el.imageUrl}">
                <div class="layer">
                    <div class="w-100 d-flex justify-content-center">
                        <a href="https://1353.ir/${el.url == "1353" ? "" : el.url}" class="details mx-3 bg-white text-decoration-none rounded">
                            <i class="fas fa-link"></i>
                        </a>
                        <a href="#x" class="zoom-it mx-3 bg-white text-decoration-none rounded" data-order="${i}">
                            <i class="fas fa-search"></i>
                        </a>
                    </div>
                </div>
            </div>
            `;

      let img = `
      <div class="carousel-item" data-order="${i}">
          <img src="img/Projects/${el.imageUrl}" class="d-block w-100"
              alt="...">
          <div class="carousel-caption d-none d-md-block">
              <p class="h5">${el.name}</p>
          </div>
      </div>
      `;

      $("#works .row").append(work);
      $('#gallery .carousel-inner').append(img);
    });
  });
}

async function loadJson(url) {
  let res = await fetch(url);
  let json = await res.json();

  return json;
}
