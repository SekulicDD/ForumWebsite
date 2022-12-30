<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'user_id',
        'text_content'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
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


    public static function boot() {
        parent::boot();

        static::deleting(function($post) {
            $post->message()->delete();
        });
    }
}
