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
    $firstName = $request->firstName;
    $lastName = $request->lastName;
    $email = $request->email;
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        http_response_code(401);
        return;
    }
    $phone = $request->phone;
    // echo $phone;
    $password = $request->password;
    $password_hash = password_hash($password,
    PASSWORD_DEFAULT, array('cost' => 9));
    $userType = $request->userType;
    $id = (int)((rand() * rand())/rand());
    $sql = "INSERT INTO Customer (First_Name,Last_Name,Email,Phone,Password,User_Type,ID) VALUES ('$firstName','$lastName','$email','$phone','$password_hash','$userType',$id)";
    $result = mysqli_query($db, $sql);
    if($result){
        $msg =  "
        <HTML><HEAD>Welcome to Mercado Escolar</HEAD>
        <BODY>
        <p>
        Hi $firstName, <br /> Welcome to Mercado Escolar.<br /> You have been successfully registered to Mercado Escolar as a $userType. We hope you have the best of experience with us.<br /> <br /> Thanks,<br />Mercado Escolar Team.
        </p>
        </BODY>
        </HTML>";
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
        $mail->Subject = 'Welcome to Mercado Escolar';
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