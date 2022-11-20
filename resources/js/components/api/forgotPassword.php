<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'connect.php';
require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $email = $request->email;
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        http_response_code(401);
        return;
    }
    $sql = "SELECT First_Name,Email,Password FROM Customer WHERE Email = '$email'";
    $result = mysqli_query($db, $sql);
    // if (mysqli_num_rows($result) > 0) {
    //     while ($Row = mysqli_fetch_assoc($result)) {
    //         $password = $Row["First_NAm"]
    //     }
    // }
    if (mysqli_num_rows($result) > 0) {
        while ($Row = mysqli_fetch_assoc($result)) {

            $password = $Row["Password"];
            $name = $Row["First_Name"];
            $msg =  "
            <HTML><HEAD>Mercado Escolar Password Assistance</HEAD>
            <BODY>
                <p>
                    Hi $name, <br /> Following are your Login Credentials<br /> Email: $email  <br /> New Password: Mercado123  <br />We hope you have the best of experience with us.<br /> <br /> Thanks,<br />Mercado Escolar Team.
                </p>
            </BODY>
            </HTML>";
        }
        $mail = new PHPMailer(true);
        $mail->isSMTP();                                     
        $mail->Host = 'smtp.gmail.com'; 
        $mail->SMTPAuth = True;                                    
        $mail->SMTPSecure = 'ssl';    
        $mail->Username = 'wdm12avnk@gmail.com';
        $mail->Password = 'nhhxshwyaawcuydb';                       
        $mail->Port = 465;                                   
        $mail->setFrom('wdm12avnk@gmail.com', 'Mercado Escolar');
        $mail->addAddress($email);
        $mail->addReplyTo('wdm12avnk@gmail.com', 'Support');
        $mail->isHTML(true);                                 
        $mail->Subject = 'Your Login Credentials';
        $mail->Body    = $msg;
        $mail->AltBody = 'Please Upgrade Your Browser to view this email';
        if(!$mail->send()) {
        echo "Unable to send email"; exit;}
        http_response_code(201);
    }
    else{
         http_response_code(409); 
    }
         
}
?> 