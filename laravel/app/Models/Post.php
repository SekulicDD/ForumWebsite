<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'message_id'
    ];

    public function category(){
        return $this->belongsTo(Category::class);
    }

    public function message(){
        return $this->belongsTo(Message::class);
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
