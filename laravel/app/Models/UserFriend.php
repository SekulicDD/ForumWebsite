<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Builder;

class UserFriend extends Model
{
    use HasFactory;
    protected $table = 'users_friends';
    protected $primaryKey = 'id';

}
