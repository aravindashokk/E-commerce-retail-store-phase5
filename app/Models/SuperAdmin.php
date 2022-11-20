<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SuperAdmin extends Model
{
    use HasFactory;
    public $table = "SuperAdmin";
    public $timestamps = false;
    protected $fillable = [
		'First_Name', 'Last_Name', 'Email', 'Password', 'User_Type','ID'
	];
}
