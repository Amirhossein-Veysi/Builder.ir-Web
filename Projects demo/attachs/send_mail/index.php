<?php 
    // Multiple recipients
    $to = 'gholamreza.saeadian@gmail.com'; // note the comma
    
    // Subject
    $subject = 'تماس از طرف : ' . $_POST['name'];
    
    // Message
    $message = '
    <html>
    <head>
      <title>Contact from ' . $_POST['name'] .'</title>
    </head>
    <body>
      <p>پیام : ' . nl2br(htmlspecialchars($_POST['message'])) .'</p>
      <table>
        <tr>
          <th>ایمیل</th><th>تلفن تماس</th><th>نام</th><th>صفحه مبدا</th>
        </tr>
        <tr>
          <td>' . $_POST['email'] .'</td><td>' . $_POST['phone'] . '</td><td>' . $_POST['name'] . '</td><td>' . $_POST['project'] .'</td>
        </tr>
      </table>
    </body>
    </html>
    ';
    
    // To send HTML mail, the Content-type header must be set
    $headers[] = 'MIME-Version: 1.0';
    $headers[] = 'Content-type: text/html; charset=UTF-8';
    
    // Additional headers
    $headers[] = $_POST['email'];
    
    // Mail it
    // mail($to, $subject, $message, implode("\r\n", $headers));

    $path = explode('.', $_POST['project'])[0];

    header("location : ../../$path?sent=true");
?>