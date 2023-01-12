<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Route;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'user_id',
        'text_content'
    ];

    public function sub_category(){
        return $this->belongsTo(SubCategory::class);
    }

    public function user(){
        return $this->belongsTo(User::class);
    }

    public function images(){
        return $this->belongsToMany(Image::class);
    }

    public function replies(){
        return $this->hasMany(Reply::class);
    }

}
