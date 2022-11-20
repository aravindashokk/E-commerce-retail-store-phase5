<?php

namespace App\Http\Controllers;

use App\Models\Service_Order;
use Illuminate\Http\Request;

class OrderController extends Controller
{

     function getAllOrders(){
        return Service_Order::all();
      }

      function deleteOrder(Request $request) {
        return Service_Order::where('Order_ID',$request->Order_ID)->delete();
    } 

    function addNewOrder(Request $request) {
      $order = Service_Order::create([
        'First_Name' => $request['First_Name'],
        'Last_Name'=> $request['Last_Name'],
        'Email'=> $request['Email'],
        'Service'=> $request->Service,
        'items'=> $request['items'],
        'instruction'=> $request->instruction,
        'Phonenumber'=> $request['Phonenumber'],
        'Customer_ID' => $request['Customer_ID']
      ]);

    if($order) { return response(["message" => "order created"],200);} else {
      return response(["message" => "failed to create order"], 401);
    }
    }


    function addPlaceOrder(Request $request) {
      $order = Service_Order::create([
        'First_Name' => $request['FirstName'],
        'Last_Name'=> $request['LastName'],
        'Email'=> $request['email'],
        'Service'=> $request->service,
        'items'=> $request['Items'],
        'instruction'=> $request->Instruction,
        'Phonenumber'=> $request['phoneNumber'],
        'Customer_ID' => $request['customerID']
      ]);

    if($order) { return response(["message" => "order created"],200);} else {
      return response(["message" => "failed to create order"], 401);
    }
    }

    function updateExistingOrder(Request $request) {
      $updated_order = Service_Order::where('Order_ID', $request->Order_ID)->update([
        'First_Name' => $request['First_Name'],
        'Last_Name'=> $request['Last_Name'],
        'Email'=> $request['Email'],
        'Service'=> $request->Service,
        'items'=> $request['items'],
        'instruction'=> $request->instruction,
        'Phonenumber'=> $request['Phonenumber'],
        'Customer_ID' => $request['Customer_ID']
      ]);

      if($updated_order) { return response(["message" => "order updated"],200);} else {
        return response(["message" => "failed to update order"], 401);
      }
    }
}
