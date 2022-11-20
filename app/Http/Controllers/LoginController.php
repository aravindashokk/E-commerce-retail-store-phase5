<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use App\Models\Customer;
use App\Models\Personel;

class LoginController extends Controller
{
    public function authenticateUser(Request $request)
    {
        $user = (Customer::where('Email', $request->email)->first());
        $employee = (Personel::where('Email', $request->email)->first());
        if(!$user || !Hash::check(`$request->password`, $user->Password)) {
            if(!$employee || !Hash::check(`$request->password`, $employee->Password)) {
                return response(['message' => 'Bad creds'],401);
            } else { return $employee; }
        } else {
            return $user;
        }
    }
}
