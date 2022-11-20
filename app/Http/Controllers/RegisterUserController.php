<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Customer;
use Illuminate\Support\Facades\Hash;
use App\Http\Controllers\MailerController;
class RegisterUserController extends Controller
{
    protected $MailerController;
    public function __construct(MailerController $MailerController)
    {
        $this->MailerController = $MailerController;
    }
    function registerUser(Request $request) {
        $First_Name = $request['firstName'];
        $userType = $request['userType'];
            $user = Customer::create([
                'First_Name' => $request['firstName'],
                'Last_Name'=> $request['lastName'],
                'Email'=> $request['email'],
                'Password'=> Hash::make(`$request->password`),
                'User_Type'=> $request['userType'],
                'ID' => ((int)((rand() * rand())/rand()))]);
            if($user) {
                $msg =  "
                        <HTML><HEAD>Welcome to Mercado Escolar</HEAD>
                        <BODY>
                        <p>
                        Hi $First_Name, <br /> Welcome to Mercado Escolar.<br /> You have been successfully registered to Mercado Escolar as a $userType. We hope you have the best of experience with us. Laundry has never been this easier.<br /> <br /> Thanks,<br />Mercado Escolar Team.
                        </p>
                        </BODY>
                        </HTML>";

                $emailRecipient=$request['email'];
                $emailSubject="Welcome to Mercado Escolar";
                $response = $this->MailerController->composeEmail($emailRecipient, $emailSubject, $msg);
                return $response;
            } else {
                return response(['message' => "unable to register user"],401);
            } 
    }
}
