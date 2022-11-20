<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SuperAdmin;
class SuperAdminController extends Controller
{
    function getAllSuperAdmin() {
        return SuperAdmin::where('User_Type','SuperAdmin')->get();
    }

    function deleteSuperAdmin(Request $request) {
        return SuperAdmin::where('ID',$request->ID)->delete();
    } 
}
