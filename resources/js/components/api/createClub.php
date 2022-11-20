<?php 

require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $clubName = $request->clubName;
    $email = $request->email;
    $schoolId = $request->schoolId;
    $clubDes = $request->clubDes;
    if(!filter_var($email,FILTER_VALIDATE_EMAIL)){
        http_response_code(401);
        return;
    }
    $id = (int)((rand() * rand())/rand());
    $sql = "INSERT INTO club (club_ID,club_name,club_email,school_Id,club_description) VALUES ($id,'$clubName','$email','$schoolId','$clubDes')";
    $result = mysqli_query($db, $sql);
    if($result){
        http_response_code(201);
    }
    else{
         http_response_code(409); 
    }
         
}
?>