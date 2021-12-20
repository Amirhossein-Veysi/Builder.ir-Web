$(document).ready(function () {
  //Variable
  let navItmLnks = $(".nav .nav-item .nav-link");
  let sections = $("section");
  let emailRegEx = /[0-9a-zA-Z]+\@+[a-z]+\.+['com']/;
  let observer = new MutationObserver((mutations) => {
    for (let mutation of mutations) {
      // examine new nodes, is there anything to highlight?

      for (let node of mutation.addedNodes) {
        // we track only elements, skip other nodes (e.g. text nodes)
        if (!(node instanceof HTMLElement)) continue;

        // check the inserted element for being a code snippet
        if (node.matches(".work")) {
          $(node).find(".zoom-it").on("click", deWorkZomItClckHandler);
        }
      }
    }
  });
  let works = document.querySelector("#works .row");
  let x, y;

  observer.observe(works, { childList: true, subtree: true });

  //Event Listener
  $(window).on("load", dtctTrgtByHash).on("load", addWorks);
  navItmLnks.on("click", deNavItmLnksClckHandler);
  $(".works .work .layer div .details").on("click", deWorkDtilsClckHandler);
  $(".container-fluid .close").on("click", mdlClsClckHandler);
  $(".section-control .prev-section").on("click", goPrevSctcn);
  $(".section-control .next-section").on("click", goNxtSctcn);
  $(document).on("keydown", deKyPrsHandler);
  $("#contact form").on("submit", deContctFrmSbmtHandler);

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
    $("#gallery .carousel-inner .carousel-item").removeClass("active");
    console.log(
      $(
        `#gallery .carousel-inner .carousel-item[data-order="${$(this).data(
          "order"
        )}"`
      )
    );
    $(
      `#gallery .carousel-inner .carousel-item[data-order="${$(this).data(
        "order"
      )}"`
    ).addClass("active");
  }

  function deWorkDtilsClckHandler() {
    $("#workModal").removeClass("d-none");
    event.preventDefault();
  }

  function deContctFrmSbmtHandler() {
    event.preventDefault();
    $("#contact form .alert-danger").addClass("d-block");
    if ($("#email").val() === "") {
      // If email is not filled
      $("#contact form .alert-danger")
        .html("لطفا ایمیل خود را وارد کنید")
        .removeClass("d-none");
    } else if (!emailRegEx.test($("#email").val())) {
      // If email is invalid
      $("#contact form .alert-danger")
        .html("لطفا یک ایمیل معتبر وارد کنید")
        .removeClass("d-none");
    } else if (Number($("#cap").val()) !== x + y) {
      // If recaptcha is invalid
      $("#contact form .alert-danger")
        .html("اشتباه! لطفا محاسبه را دوباره انجام دهید")
        .removeClass("d-none");
      gnrtCptcha();
    } else {
      let value = new FormData(document.getElementById("contactForm")); // Make the value to send to server
      sndRqstoSrvr("send_mail/", value); // Send the form data
    }
  }

  function deKyPrsHandler() {
    if (event.keyCode == 39) goPrevSctcn(); // Go to previous page by pressing arrow right
    if (event.keyCode == 37) goNxtSctcn(); // Go to previous page by pressing arrow left
  }

  //Function
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
                        <a href="https://1353.ir/${
                          el.url == "1353" ? "" : el.url
                        }" class="details mx-3 bg-white text-decoration-none rounded">
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

      $("#works .row, #blog .row").append(work);
      $("#gallery .carousel-inner").append(img);
    });
  });

  // Calls
  gnrtCptcha();
}

async function loadJson(url) {
  let res = await fetch(url);
  let json = await res.json();

  return json;
}

// Generates the captcha code
function gnrtCptcha() {
  x = Math.floor(Math.random() * 49) + 1;
  y = Math.floor(Math.random() * 49) + 1;

  let canvas = document.querySelector("#contact form .captcha canvas");
  let ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "16px Arial";
  ctx.direction = "ltr";
  ctx.fillText(`${x} + ${y} =`, 5, 30);
}

function sndRqstoSrvr(url, value){ // Sends request and receives result from server
  let xhtp; // To hold the object
  if (window.XMLHttpRequest){
      xhtp = new XMLHttpRequest(); // For modern browsers
  }else{
      xhtp = window.ActiveXObject('Microsoft.XMLHTPP'); // For old ones
  }

  xhtp.open('POST', url, true); // Opens the request
  xhtp.send(value);

  xhtp.addEventListener('readystatechange', () => {
      if (xhtp.readyState == 4 && xhtp.status == 200){
          if (xhtp.responseText == 'success') {
              $('#contact form .alert-success').html('ایمیل با موفقیت ارسال شد').addClass('d-block');
          }else{
              $('#contact form .alert-danger').html('متاسفانه خطایی رخ داده است، لطفا دوباره تلاش کنید').addClass('d-block');
          }
          console.log(xhtp.responseText);
      }
  });
}
