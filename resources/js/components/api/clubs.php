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


function getAllClubs($data){
     $sql = "SELECT * FROM club";
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

function addNewClub($request) {
    $club_ID = $request[1]-> club_ID;
    $club_name = $request[1]-> club_name;
    $club_email = $request[1]-> club_email;
    
    $school_Id= $request[1]-> school_Id;
    $club_description= $request[1]-> club_description;
   
   
    $sql = "INSERT INTO club (club_ID,club_name,club_email,school_Id,club_description) VALUES ('$club_ID','$club_name','$club_description','$school_Id','$club_description')";
    $result = mysqli_query($request[0], $sql);
     if($result){
         echo "club added Successfully";
         http_response_code(200);
     } else {
         echo "Failed to add new club. Please contact the Administrator";
         http_response_code(422);
     }
}

function deleteClubs($inputData) {

    $club_ID=$inputData[1]-> club_ID;
    $sql = "DELETE FROM club WHERE club_ID = $club_ID";
    $result = mysqli_query($inputData[0], $sql);
    if($result){
        echo "club Removed Successfully";
        http_response_code(200);
    } else {
        echo "Failed to remove the club. Please contact the Administrator";
        http_response_code(422);
    } 
}

function alterRecords($inputData) {
    $club_ID = $inputData[1]-> club_ID;
    $club_name = $inputData[1]-> club_name;
    $club_email = $inputData[1]-> club_email;
    
    $school_Id= $inputData[1]-> school_Id;
    $club_description= $inputData[1]-> club_description;
    
    $sql = "UPDATE Club Set club_ID = '$club_ID' ,club_name = '$club_name' ,club_email = '$club_email',school_Id = '$school_Id',club_description='$club_description' WHERE club_ID = $club_ID";
    $result = mysqli_query($inputData[0], $sql);
    if($result){
        echo "Club Updated Successfully";
        http_response_code(200);
    } else {
        echo "Failed to update the Club. Please contact the Administrator";
        http_response_code(422);
    } 
}
?>