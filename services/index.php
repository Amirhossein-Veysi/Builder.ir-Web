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
            <div id="carouselExampleCaptions" class="col-12 col-md-10 col-lg-8 m-auto mt-md-5 p-0 slide" data-ride="carousel">
              <div class="cont">
                <?php
                if ($_GET['link'] == 'WebDesign'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-1.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption ml-auto" style="right: -20%;">
                    <h2><strong>طراحی سایت، اپلیکیشن، ربات</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'Software'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-2.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h2><strong>طراحی نرم‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌‌ افزار‌های تحت وب</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'MarketPlace'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-3.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="right: -20%;">
                    <h2><strong>بازارگاه فروش انواع محصولات وب</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'Seo'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-4.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h2><strong>خدمات سئو و دیجیتال مارکتینگ</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'Content'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-5.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="right: -20%;">
                    <h2><strong>تولید محتوای متنی و گرافیکی</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'SocialNetwork'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-6.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h2><strong>خدمات شبکه‌های اجتماعی</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'DomainHost'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-7.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="right: -20%;">
                    <h2><strong>ثبت دامنه و فروش هاست</strong></h2>
                  </div>
                </div>
                <?php
                }
                if ($_GET['link'] == 'SiteBuilder'){
                ?>
                <div class="item shadow-lg">
                  <img src="image/carousel-8.png" class="d-block w-100 rounded" alt="...">
                  <div class="carousel-caption" style="left: -20%;">
                    <h2><strong>سامانه سایت‌ساز</strong></h2>
                  </div>
                </div>
                <?php
                }
                ?>
              </div>
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