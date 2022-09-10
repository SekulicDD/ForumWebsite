<?php

namespace App\Repositories;

use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Arr;

class UserRepository implements UserRepositoryInterface 
{
    public function getUser($userId,$includes)
    {
        $user= User::where("id",$userId);
        
        if(!empty($includes)&&$includes[0]=="messages"){
            $user=$user->with("messages.post");
            $includes=Arr::except($includes,"messages");
        }
       
        foreach ($includes as $value) {
            $user=$user->with($value);
        }
      
        return $user->first();
    }

    public function updateUser($userId, array $newDetails){
        $user=User::find($userId)->first();
        if(!empty($newDetails["name"])){
            $user->name=$newDetails["name"];
            $user->save();
        }

        return $user;
    }
}