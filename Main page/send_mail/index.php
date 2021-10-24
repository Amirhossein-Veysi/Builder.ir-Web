<?php 
    try {
      extract($_POST);
      // Multiple recipients
      $to = 'gholamreza.saeadian@gmail.com'; // note the comma
      
      // Subject
      $subject = 'تماس از طرف : ' . $name;
      
      // Message

      $message = '
      <html>
      <head>
        <title>Contact from ' . $name .'</title>
        <style>
        *{
          margin: 0;
          padding: 0;
          box-sizing: border-box;
      }
      
      table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 100%;
      margin-top: 50px;
      }
      
      td, th {
        border: 1px solid #dddddd;
        text-align: left;
        padding: 8px;
      }
      
      tr:nth-child(even) {
        background-color: #dddddd;
      }
      
      .msg-cont{
          width: 90%;
          height: 100%;
          padding: 30px;
          color: #777;
          background: #f1f1f1;
          border-radius: 5px;
          margin-top: 50px;
      }
  
      p, h3{
        text-align: right;
      }
  
      .logo{
        width: 80px;
        margin-left: 50%;
        transform: translateX(-50%);
      }
        </style>
      </head>
      <body dir="rtl">
      <img class="logo" src="https://1353.ir/attachs/image/icon.jpg">
      <p style="margin-top: 30px;text-align: center;width: 90%;">گروه طراحی وبسایت ایران</p>
      <div class="msg-cont">
        <h3>پیام:</h3>
        <p>' . nl2br(htmlspecialchars($p_message)) .'</p>
      </div>
        <table>
          <tr>
            <th>ایمیل</th><th>موضوع</th><th>نام</th><th>صفحه مبدا</th>
          </tr>
          <tr>
            <td>' . $email .'</td><td>' . $p_subject . '</td><td>' . $name . '</td><td>SiteBuilder</td>
          </tr>
        </table>
      </body>
      </html>
      ';
      
      // To send HTML mail, the Content-type header must be set
      $headers[] = 'MIME-Version: 1.0';
      $headers[] = 'Content-type: text/html; charset=UTF-8';
      
      // Additional headers
      $headers[] = $email;
      
      // Mail it
      mail($to, $subject, $message, implode("\r\n", $headers));

      echo 'success';
    } catch (\Throwable $th) {
      echo 'failed';
    }
?>