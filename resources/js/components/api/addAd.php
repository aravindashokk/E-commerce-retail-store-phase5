<?php 

require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $AdvertisementName = $request->AdvertisementName;
    $AdvertisementId = $request->AdvertisementId;
    $AdvertisementDescription = $request->AdvertisementDescription;
   
    
    $sql = "INSERT INTO advertisement (adv_id,adv_name,adv_desp) VALUES ('$AdvertisementName',$AdvertisementId,'$AdvertisementDescription')";
    $result = mysqli_query($db, $sql);
    if($result){
        http_response_code(201);
    }
    else{
         http_response_code(409); 
    }
         
}
?>