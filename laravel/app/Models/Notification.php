<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;

    public function user(){
        return $this->hasOne(User::class);
    }
    public function post(){
        return $this->hasOne(Post::class);
    }
}
