<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\LoginController;
use App\Http\Controllers\RegisterUserController;
use App\Http\Controllers\OrderController;
use App\Http\Controllers\StudentController;
use App\Http\Controllers\productsController;
use App\Http\Controllers\BusinessController;
use App\Http\Controllers\SuperAdminController;
use App\Http\Controllers\SchoolAdminController;
use App\Http\Controllers\ContactUsController;
use App\Http\Controllers\ForgetPassword;
use App\Http\Controllers\ChatController;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('/authenticate',[LoginController::class,'authenticateUser']);
Route::post('/register',[RegisterUserController::class,'registerUser']);
Route::get('/getOrders',[OrderController::class,'getAllOrders']);
Route::get('/getStudents',[StudentController::class,'getAllStudents']);
Route::get('/getBusinessowner',[BusinessController::class,'getAllBusinessowner']);
Route::get('/getSuperAdmin',[SuperAdminController::class,'getAllSuperAdmin']);
Route::get('/getproducts',[productsController::class,'getAllproducts']);
Route::get('/getschedule',[ScheduleDropController::class,'getAllSchedule']);

Route::post('/deleteorder',[OrderController::class,'deleteOrder']);
Route::post('/deleteStudent',[StudentController::class,'deleteStudent']);
Route::post('/deleteSchoolAdmin',[SchoolAdminController::class,'deleteSchoolAdmin']);
Route::post('/deleteSuperAdmin',[SuperAdminController::class,'deleteSuperAdmin']);
Route::post('/deleteproducts',[productsController::class,'deleteproducts']);
Route::post('/deletepickup',[PickupController::class,'deletePickup']);

Route::post('/addorder',[OrderController::class,'addNewOrder']);
Route::post('/addproducts',[productsController::class,'addNewproducts']);
Route::post('/addplaceorder',[OrderController::class,'addPlaceOrder']);       

Route::post('/updateorder',[OrderController::class,'updateExistingOrder']);
Route::post('/updateproducts',[productsController::class,'updateExistingproducts']);
Route::post('/updateschedule',[ScheduleDropController::class,'updateExistingSchedule']);

Route::post('/contactus',[ContactUsController::class,'contactUs']);
Route::post('/registerIncident',[RegisterIncident::class,'registerIncident']);


Route::get('/getmessages',[ChatController::class,'getAllMessages']);
Route::post('/postmessage',[ChatController::class,'postmessage']);