<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Products;
class ProductsController extends Controller
{
    function getAllProducts() {
        return Products::all();
    }

    function deleteProducts(Request $request) {
        return Products::where('ID',$request->ID)->delete();
    } 

    function addNewProducts(Request $request) {
        $Products = Products::create([
          'Brand_Name' => $request['Brand_Name'],
          'Products_Type'=> $request['Products_Type'],
          'Model_No'=> $request['Model_No'],
          'Status'=> $request->Status,
          'Load_Capacity'=> $request['Load_Capacity'],
          'Order_ID' => $request['Order_ID']
        ]);
  
      if($Products) { return response(["message" => "Products created"],200);} else {
        return response(["message" => "failed to create Products"], 401);
      }
      }
  
      function updateExistingProducts(Request $request) {
        $updated_Products = Products::where('ID', $request->ID)->update([
          'Brand_Name' => $request['Brand_Name'],
          'Products_Type'=> $request['Products_Type'],
          'Model_No'=> $request['Model_No'],
          'Status'=> $request->Status,
          'Load_Capacity'=> $request['Load_Capacity'],
          'Order_ID' => $request['Order_ID']
        ]);
  
        if($updated_Products) { return response(["message" => "Products updated"],200);} else {
          return response(["message" => "failed to update Products"], 401);
        }
      }
}
