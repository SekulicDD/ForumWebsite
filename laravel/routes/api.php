<?php

use App\Http\Controllers\Authentication\AuthController;
use App\Http\Controllers\Authentication\ResetPasswordController;
use App\Http\Controllers\Database\CategoryController;
use App\Http\Controllers\Database\PostController;
use App\Http\Controllers\Database\ReplyController;
use App\Http\Controllers\Database\UserController;
use App\Http\Controllers\Database\FriendsController;
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
    Route::get('categories/{limit?}','index');
    Route::get('categories/{category}','show');

    Route::post('categories','store');
    Route::put('categories','update');
    Route::delete('categories/{category}','destroy');
});

Route::controller(ReplyController::class)->group(function(){
    Route::get('replies/{id}','getReply');

    Route::get('users/{userId}/replies/{limit?}','getUserReplies');
    Route::get('posts/{postId}/replies/{limit?}','getPostReplies');

    Route::post('posts/{post}/replies','store');
    Route::put('replies','update');
    Route::delete('replies/{id}','destroy');
});

Route::controller(PostController::class)->group(function(){
    Route::get('posts/{post}','getPostById');
    Route::get('posts/{limit?}/{order_by?}/{direction?}/{search?}','index');

    Route::get('categories/{category}/posts/{search?}','getCategoryPosts');
    Route::get('users/{user}/posts//{search?}','getUserPosts');

    Route::post('posts','store');
    Route::put('posts','update');
    Route::delete('posts/{post}','destroy');
});

Route::controller(UserController::class)->group(function(){
    Route::get('users/{search?}','index');
    Route::get('users/{user}','show');
    Route::put('users/{id}','update');
});

Route::controller(FriendsController::class)->group(function(){
    Route::get('users/{user}/friend-requests','getAcceptedFriends');
    Route::get('users/{user}/friend-requests/incoming','getIncomingFriends');
    Route::get('users/{user}/friend-requests/outgoing','getOutgoingFriends');
    Route::post('users/{user}/friends','store');
    Route::delete('users/{user}/friends','destroy');
});


