<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\chat_message;
class ChatController extends Controller
{
    function getAllMessages() {
        return chat_message::all();
    }

    function postmessage(Request $request)
    {
      $message = chat_message::create([
          'customer_id' => $request['customer_id'],
          'name' => $request['name'],
          'message' => $request['message'],
          'time' => time()
      ]);

      if($message) {
        $ch = curl_init('http://localhost:8080');
        curl_setopt($ch, CURLOPT_CUSTOMREQUEST, "POST");
        // we send JSON encoded data to the Node.JS server
        $jsonData = json_encode([
        'name' => $request->name,
        'message' => $request->message
        ]);
        $query = http_build_query(['data' => $jsonData]);
        curl_setopt($ch, CURLOPT_POSTFIELDS, $query);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        $response = curl_exec($ch);
        curl_close($ch);

        return response(["message"=>"message updated"],200);
      } else {
        return response(["message"=>"message failed to post"],401); 
      }
    }
}
