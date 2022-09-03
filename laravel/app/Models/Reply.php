<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reply extends Model
{
    use HasFactory;

    public function post(){
        return $this->hasOne(Post::class);
    }
    public function message(){
        return $this->hasOne(Message::class);
    }
    public function reply(){
        return $this->hasOne(Reply::class);
    }
}
