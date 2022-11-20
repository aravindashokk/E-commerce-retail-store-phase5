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


function getAllPosts($data){
     $sql = "SELECT post_ID,creator_ID,post_desc,created_date FROM Post";
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

function addNewPost($request) {
    $post_ID = $request[1]-> post_ID;
    $creator_ID = $request[1]-> creator_ID;
    $post_desc = $request[1]-> post_desc;
    
    $created_date= $request[1]-> created_date;
   
   
    $sql = "INSERT INTO Post (post_ID,creator_ID,post_desc,created_date) VALUES ('$post_ID','$creator_ID','$post_desc','$created_date')";
    $result = mysqli_query($request[0], $sql);
     if($result){
         echo "Post added Successfully";
         http_response_code(200);
     } else {
         echo "Failed to add new Post. Please contact the Administrator";
         http_response_code(422);
     }
}

function deletePosts($inputData) {

    $post_ID=$inputData[1]-> post_ID;
    $sql = "DELETE FROM Post WHERE post_ID = $post_ID";
    $result = mysqli_query($inputData[0], $sql);
    if($result){
        echo "Post Removed Successfully";
        http_response_code(200);
    } else {
        echo "Failed to remove the Post. Please contact the Administrator";
        http_response_code(422);
    } 
}

function alterRecordp($inputData) {
    $post_ID = $inputData[1]-> post_ID;
    $creator_ID = $inputData[1]-> creator_ID;
    $post_desc = $inputData[1]-> post_desc;
    
    $created_date= $inputData[1]-> created_date;
    
    $sql = "UPDATE Post Set post_ID = '$post_ID' ,creator_ID = '$creator_ID' ,post_desc = '$post_desc',created_date = '$created_date' WHERE post_ID = $post_ID";
    $result = mysqli_query($inputData[0], $sql);
    if($result){
        echo "Post Updated Successfully";
        http_response_code(200);
    } else {
        echo "Failed to update the Post. Please contact the Administrator";
        http_response_code(422);
    } 
}
?>