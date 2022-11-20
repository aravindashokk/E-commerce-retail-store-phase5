<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class chat_message extends Model
{
    use HasFactory;
    public $table = "chat_messages";
    public $timestamps = false;
    protected $fillable = [
		'customer_id', 'message', 'name' ,'time'
	];
}
