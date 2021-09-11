<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="theme-color" content="#fff">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>
      <?php
        if (isset($_GET['link'])){
          echo $_GET['link'];
        }else{
          exit();
        }
      ?>
    </title>
    <link rel="shortcut icon" href="image/icon.jpg" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" integrity="sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
        <!--Start of carousel-->
      <div class="container-fluid">
        <div class="row">
            <div id="carouselExampleCaptions" class="col-12 col-md-10 col-lg-8 m-auto mt-md-5 p-0 carousel slide" data-ride="carousel">
              <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="4"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="5"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="6"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="7"></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img src="image/carousel-1.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption ml-auto" style="right: -20%;">
                    <h1><strong>طراحی سایت، اپلیکیشن، ربات</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-2.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h1><strong>طراحی نرم‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ افزار‌های تحت وب</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-3.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="right: -20%;">
                    <h1><strong>بازارگاه فروش انواع محصولات وب</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-4.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h1><strong>خدمات سئو و دیجیتال مارکتینگ</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-5.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="right: -20%;">
                    <h1><strong>تولید محتوای متنی و گرافیکی</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-6.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h1><strong>خدمات شبکه‌های اجتماعی</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-7.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="right: -20%;">
                    <h1><strong>ثبت دامنه و فروش هاست</strong></h1>
                  </div>
                </div>
                <div class="carousel-item">
                  <img src="image/carousel-8.png" class="d-block w-100" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h1><strong>سامانه سایت‌ساز</strong></h1>
                  </div>
                </div>
              </div>
              <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
              </a>
              <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
        </div>
      </div>
        <!--End of carousel-->

        <p class="alert text-center mt-4">این صفحه در حال تکمیل است. از صبوری شما متشکریم.</p>

    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.rtlcss.com/bootstrap/v4.5.3/js/bootstrap.bundle.min.js" integrity="sha384-40ix5a3dj6/qaC7tfz0Yr+p9fqWLzzAXiwxVLt9dw7UjQzGYw6rWRhFAnRapuQyK" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>
</body>
</html>