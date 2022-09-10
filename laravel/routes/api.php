<?php

use App\Http\Controllers\Authentication\AuthController;
use App\Http\Controllers\Authentication\ResetPasswordController;
use App\Http\Controllers\Database\CategoryController;
use App\Http\Controllers\Database\PostController;
use App\Http\Controllers\Database\UserController;
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

// Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
//     return $request->user();
// });

Route::controller(AuthController::class)->group(function (){
    Route::post('login', 'login');
    Route::post('register', 'register');
    Route::post('logout', 'logout');
    Route::post('refresh', 'refresh');
});

Route::post('/reset-password', [ResetPasswordController::class, 'resetPassword']);
Route::post('/change-password', [ResetPasswordController::class, 'changePassword']);

Route::controller(CategoryController::class)->group(function(){
    Route::get('categories','index');
    Route::get('categories/{id}','show');
    Route::post('categories','store');
    Route::put('categories/{id}','update');
    Route::delete('categories/{id}','destroy');
});

Route::controller(PostController::class)->group(function(){
    Route::get('posts','index');
    Route::get('post/{id}','getPostById');
    Route::get('posts/{categoryId}','getPostsByCategoryId');
    Route::post('posts','store');
    Route::put('posts','update');
    Route::delete('posts/{id}','destroy');
});

Route::controller(UserController::class)->group(function(){
    Route::get('users/{id}','show');
    Route::put('users/{id}','update');
});
