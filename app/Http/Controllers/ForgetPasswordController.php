<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Forget_Password;
use App\Http\Controllers\MailerController;
class ForgetPassword extends Controller
{
    protected $MailerController;
    public function __construct(MailerController $MailerController)
    {
        $this->MailerController = $MailerController;
    }
    function ForgetPassword (Request $request){
        $First_Name = $request['First_Name'];
        $query = $request['query'];
        $Forget_Password = Forget_Password::create([
            'First_Name' => $request['fname'],
            'Last_Name'=> $request['lname'],
            'Phonenumber'=>$request['phoneNumber'],
            'Email'=> $request['email'],
            'register'=>$request['register'],
            'query'=> $request['query']
        ]);
        if($Forget_Password){
            $msg =  "
            <HTML><HEAD>Welcome to Mercado Escolar</HEAD>
            <BODY>
            <p>
            Hello $First_Name, <br /> <br /> Your new Password: MerEsc123$  <br /> <br />Thanks,<br />Mercado Escolar Team.
            </p>
            </BODY>
            </HTML>";
            $emailRecipient=$request['email'];
            $emailSubject="Welcome to Mercado Escolar";
            $response = $this->MailerController->composeEmail($emailRecipient, $emailSubject, $msg);
            return $response;
        }else {
            return response(['message' => "unable to submit your query"],401);        }
    }
}
