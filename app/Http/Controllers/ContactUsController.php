<?php

namespace App\Http\Controllers;
use Illuminate\Http\Request;
use App\Models\Contact_Us;
use App\Http\Controllers\MailerController;
class ContactUsController extends Controller
{
    protected $MailerController;
    public function __construct(MailerController $MailerController)
    {
        $this->MailerController = $MailerController;
    }
    function contactUs (Request $request){
        $First_Name = $request['fname'];
        $contact_Form = Contact_Us::create([
            'First_Name' => $request['fname'],
            'Last_Name'=> $request['lname'],
            'Phonenumber'=>$request['PhoneNumber'],
            'Email'=> $request['email'],
            'query'=> $request['query']
        ]);
        if($contact_Form){
            $msg =  "
            <HTML><HEAD>Welcome to Mercado Escolar</HEAD>
            <BODY>
            <p>
            Hello Admin, <br /> <br /> You have received a query from $First_Name <br /> <br /> Please get in touch within 24 hours  
            Thanks,<br />Mercado Escolar Team.
            </p>
            </BODY>
            </HTML>";
            $emailRecipient=$request['email'];
            $emailSubject="Welcome to Mercado Escolar";
            $response = $this->MailerController->composeEmail($emailRecipient, $emailSubject, $msg);
            return $response;
        } else {
            return response(['message' => "unable to submit your query"],401);
        }
    }
}
