<?php 

require 'connect.php';

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");

$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata)){
    $request = json_decode($postdata);
    $ProductName = $request->ProductName;
    $ProductId = $request->ProductId;
    $Price = $request->Price;

    $id = (int)((rand() * rand())/rand());
    $sql = "INSERT INTO club (product_name,product_ID,amount) VALUES ('$ProductName',$id,'$Price')";
    $result = mysqli_query($db, $sql);
    if($result){
        http_response_code(201);
    }
    else{
         http_response_code(409); 
    }
         
}
?>