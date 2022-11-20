<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
$requestdata = json_decode(file_get_contents("php://input"));


if(isset($requestdata)){
    call_user_func($requestdata -> Function,[$db,($requestdata -> Data)]);
}


function getAllSchools($data){
     $sql = "SELECT * FROM Customer WHERE User_Type='SchoolAdmin'";
     $result = mysqli_query($data[0], $sql);
     if($result){
          $rows = array();
         while($r = mysqli_fetch_assoc($result)) {
              $rows[] = $r;
         }
       echo json_encode($rows);
     } else {
         http_response_code(422);
     }
}

function addNewSchool($request) {
    $First_Name = $request[1]-> First_Name;
    $Last_Name = $request[1]-> Last_Name;
    $Email = $request[1]-> Email;
    if(!filter_var($Email,FILTER_VALIDATE_EMAIL)){
        http_response_code(401);
        return;
    }
    $Phone= $request[1]-> Phone;
    $User_Type = $request[1]-> User_Type;
    $ID = (int)((rand() * rand())/rand());
    $sql = "INSERT INTO Customer (First_Name,Last_Name,Email,Phone,User_Type,ID,Password) VALUES ('$First_Name','$Last_Name','$Email','$Phone','SchoolAdmin',$ID,'$2y$09aIOeJpsEaLCCHSTPS3zefOIU6BfeZps8Ak4gkbCwWFoiH1mnYWeyC')";
    $result = mysqli_query($request[0], $sql);
     if($result){
         echo "Customer added Successfully";
         http_response_code(200);
     } else {
         echo "Failed to add new Customer. Please contact the Administrator";
         http_response_code(422);
     }
}

function deleteSchool($inputData) {



    $ID=$inputData[1]-> ID;
    $sql = "DELETE FROM Customer WHERE ID = $ID";
    $result = mysqli_query($inputData[0], $sql);
    if($result){
        echo "Customer Removed Successfully";
        http_response_code(200);
    } else {
        echo "Failed to remove the Customer. Please contact the Administrator";
        http_response_code(422);
    } 
}

function alterRecordsc($inputData) {
    $ID=$inputData[1]-> ID;
    $First_Name = $inputData[1]-> First_Name;
    $Last_Name = $inputData[1]-> Last_Name;
    $Email = $inputData[1]-> Email;
    if(!filter_var($Email,FILTER_VALIDATE_EMAIL)){
        http_response_code(401);
        return;
    }
    $Phone= $inputData[1]-> Phone;
    
    $sql = "UPDATE Customer Set Email = '$Email' ,First_Name = '$First_Name' ,Last_Name = '$Last_Name',Phone = '$Phone',User_Type = 'SchoolAdmin' WHERE ID = $ID";
    $result = mysqli_query($inputData[0], $sql);
    if($result){
        echo "Customer Updated Successfully";
        http_response_code(200);
    } else {
        echo "Failed to update the Customer. Please contact the Administrator";
        http_response_code(422);
    } 
}
?>