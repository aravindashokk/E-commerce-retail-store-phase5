<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Service_Order extends Model
{
    use HasFactory;
    public $table = "Service_Order";
    public $timestamps = false;
    protected $fillable = [
		'First_Name', 'Last_Name', 'Email', 'Service', 'items', 'instruction' , 'Phonenumber', 'Customer_ID','Order_ID'
	];
}
