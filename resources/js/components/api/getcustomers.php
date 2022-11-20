<?php
require 'connect.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS, PUT, DELETE");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, X-Requested-With");
header("Content-Type: application/json; charset=UTF-8");
include './customers.php';


$sql= "SELECT  First_Name,Last_Name,Email,Phone,User_Type from customer where User_Type='Student'";
$result=$db->query($sql);
echo json_encode($result->fetch_all(MYSQLI_ASSOC));

?>