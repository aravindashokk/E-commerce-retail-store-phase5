<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    use HasFactory;
    public $table = "Products";
    public $timestamps = false;
    protected $fillable = [
		'Model_No', 'Brand_Name', 'Load_Capacity', 'Status','Order_ID', 'Products_Type','ID'
	];
}
