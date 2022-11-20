<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\SchoolAdmin;
class SchoolAdminController extends Controller
{
    function getAllSchoolAdmin() {
        return SchoolAdmin::where('User_Type','SchoolAdmin')->get();
    }

    function deleteSchoolAdmin(Request $request) {
        return SchoolAdmin::where('ID',$request->ID)->delete();
    } 
}
