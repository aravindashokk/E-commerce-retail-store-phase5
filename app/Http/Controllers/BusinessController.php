<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Business;
class BusinessController extends Controller
{
    function getAllBusiness() {
        return Business::where('User_Type','BusinessOwner')->get();
    }

    function deleteBusiness(Request $request) {
        return Business::where('ID',$request->ID)->delete();
    } 
}
