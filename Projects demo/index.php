<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ExpertClub.ir</title>
    <link rel="shortcut icon" href="image/icon.jpg" />
    <link rel="stylesheet" href="https://pro.fontawesome.com/releases/v5.10.0/css/all.css" integrity="sha384-AYmEC3Yw5cVb3ZcuHtOA93w35dYTsvhLPVnYs9eStHfGJvOvKxVfELGroGkvsg+p" crossorigin="anonymous"/>
    <link rel="stylesheet" href="https://cdn.rtlcss.com/bootstrap/v4.5.3/css/bootstrap.min.css" integrity="sha384-JvExCACAZcHNJEc7156QaHXTnQL3hQBixvj5RV5buE7vgnNEzzskDtx9NQ4p6BJe" crossorigin="anonymous">
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
    
    <div class="container-fluid">
        <!--Start of navbar-->
      <div class="container-fluid">
        <div class="row fixed-top">
            <div class="col-12" dir="rtl">
              <nav class="navbar navbar-expand-md na  vbar-light">
                <div class="navbar-brand">
                  <a href="https://1353.ir" target="_blank"><img src="image/Home.png" width="50px" height="50px"></a>
                </div>
                <p class="h2 mx-auto">باشگاه متخصصین ایران</p>
              </nav>
            </div>
        </div>
      </div>
        <!--End of navbar-->
        <!--Start of main-->
        <div class="row mt-5 pt-5">
            <div class="col-10 m-auto mt-5 shadow-lg rounded-lg pt-5">
                <div class="row" dir="rtl">
                    <div class="col-12 col-lg-7 py-5">
                        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                          <div class="carousel-inner project-img">
                            <div class="carousel-item active">
                              <img class="d-block w-100" src="image/Group.jpg" alt="First slide">
                            </div>
                            <div class="carousel-item">
                              <img class="d-block w-100" src="image/Group.jpg" alt="Second slide">
                            </div>
                            <div class="carousel-item">
                              <img class="d-block w-100" src="image/Group.jpg" alt="Third slide">
                            </div>
                          </div>
                          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                          </a>
                          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                          </a>
                        </div>
                        <div class="row mt-4 px-4 justify-content-around">
                            <div class="col-4 contact-way">
                                <p class="text-muted mt-4">ایمیل : info@1353.ir</p>
                            </div>
                            <div class="col-4 contact-way">
                                <p class="text-muted mt-4" dir="ltr">شماره (واتس‌اپ) : 0919-919-1353</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-lg-5">
                        <form class="p-5 form" action="send_mail/" method="POST">
                          <?php 
                              if (isset($_GET['sent'])){
                                echo '<div class="alert alert-danger mb-4 text-center d-none">
                                    ایمیل با موفقیت ارسال شد!
                                </div>';
                              }
                          ?>
                          <div class="alert alert-danger mb-4 text-center d-none">

                          </div>
                            <h2>فرم ارتباط با ما</h2>
                            <p class="text-muted">پذیرای هرگونه نظر و  پیشنهاد از سوی شما دوستان و همکاران گرامی هستیم. با تشکر از حسن توجه شما</p>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control py-4" id="name" name="name" placeholder="لطفا نام و نام خانوادگی خود را وارد کنید...">
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control py-4" id="email" name="email" placeholder="لطفا ایمیل خود را وارد کنید...">
                            </div>
                            <div class="form-group mt-3">
                                <input type="text" class="form-control py-4" id="phone" name="phone" placeholder="لطفا شماره تماس (واتس‌اپ) خود را وارد کنید...">
                            </div>
                            <div class="form-group mt-3">
                                <textarea type="text" class="form-control py-4" id="message" name="message" placeholder="لطفا پیام خود را وارد کنید..."></textarea>
                            </div>
                            <div class="form-group">
                              <input type="text" value="ExpertClub.ir" name="project" class="d-none">
                            </div>
                            <div class="form-group">
                              <button class="btn btn-success w-100 mt-3 py-2" type="submit">ارسال</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <!--End of main-->
    </div>

    <!--Start of footer-->
  <footer class="footer-section mt-5">
    <div class="copyright-area">
        <div class="container">
            <div class="row">
                <div class="col-12 text-center">
                    <div class="copyright-text">
                        <p>Copyright &copy; 2021, All Right Reserved <a href="index.html">sitebuilder.ir</a></p>
                        <p class="text-muted">Design and developed by Amirhossein Veysi</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>
  <!--End of footer-->

    <!--Link js files to the document-->
    <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
    <script src="https://cdn.rtlcss.com/bootstrap/v4.5.3/js/bootstrap.bundle.min.js" integrity="sha384-40ix5a3dj6/qaC7tfz0Yr+p9fqWLzzAXiwxVLt9dw7UjQzGYw6rWRhFAnRapuQyK" crossorigin="anonymous"></script>
    <script src="js/script.js"></script>

</body>
</html>