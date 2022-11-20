<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;

class StudentController extends Controller
{
    function getAllStudents() {
        return Student::all();
    }

    function deleteStudent(Request $request) {
       return Student::where('ID',$request->ID)->delete();
    } 
}
