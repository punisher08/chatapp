<?php

use Illuminate\Http\Request;
use Illuminate\Http\Response;
use App\Events\Message;
use Illuminate\Support\Facades\Route;

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
Route::post('/send-message',[App\Http\Controllers\ChatController::class,'message']);
Route::get('/chatapp',[App\Http\Controllers\ChatController::class,'index']);
// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });
