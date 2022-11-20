<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Forget_Password extends Model
{
    use HasFactory;
    public $table = "Forget_Password";
    public $timestamps = false;
    protected $fillable = [
		'First_Name', 'Last_Name', 'Phonenumber' ,'Email', 'register' , 'query'
	];
}