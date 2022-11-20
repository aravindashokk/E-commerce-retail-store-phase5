<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

class MailerController extends Controller {

    // =============== [ Email ] ===================
    public function email() {
        return view("email");
    }


    // ========== [ Compose Email ] ================
    public function composeEmail($emailRecipient, $emailSubject, $msg) {
        require base_path("vendor/autoload.php");
        $mail = new PHPMailer(true);     // Passing `true` enables exceptions

        try {

            // Email server settings
            $mail->SMTPDebug = 0;
            $mail->isSMTP();
            $mail->Host = 'smtp.sendgrid.net';             //  smtp host
            $mail->SMTPAuth = true;
            $mail->Username = 'apikey';   //  sender username
            $mail->Password = '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';       // sender password
            $mail->SMTPSecure = 'tls';                  // encryption - ssl/tls
            $mail->Port = 25;                          // port - 587/465

            $mail->setFrom('nxs4184@mavs.uta.edu', 'Mercado Escolar Inc.');
            $mail->addAddress($emailRecipient);

            $mail->addReplyTo('nxs4184@mavs.uta.edu', 'Support');


            $mail->isHTML(true);                // Set email content format to HTML

            $mail->Subject = $emailSubject;
            $mail->Body    = $msg;

            // $mail->AltBody = plain text version of email body;

            if( !$mail->send() ) {
                return response(["failed" => "Email not sent."],471)->withErrors($mail->ErrorInfo);
            }
            
            else {
                return response(["success" => "Email has been sent."],200);
            }

        } catch (Exception $e) {
             return response(['error'=> 'Message could not be sent.'],471);
        }
    }
}