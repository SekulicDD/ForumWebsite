<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class SubCategory extends Model
{
    use HasFactory;
    protected $table = 'sub_categories';

    public function posts(){
        return $this->hasMany(Post::class);
    }

    public function category(){
        return $this->belongsTo(Category::class);
    }
}
