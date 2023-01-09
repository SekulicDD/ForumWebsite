<?php

namespace App\Repositories;

use App\Http\Resources\UserResource;
use App\Interfaces\UserRepositoryInterface;
use App\Models\User;
use Illuminate\Support\Arr;

class UserRepository implements UserRepositoryInterface 
{

    public function getUsers($includes,$limit,$search=null)
    {
        $user= User::query();

        foreach ($includes as $value) {
            $user=$user->with($value);
        }
        $user->where('name', 'like', '%'.$search.'%');

        return UserResource::collection($user->paginate($limit));
    }
 
    public function getUser($userId,$includes)
    {
        $user= User::where("id",$userId);
        
        foreach ($includes as $value) {
            $user=$user->with($value);
        }
      
        return new UserResource($user->first());
    }

    public function updateUser($userId, array $newDetails){
        $user=User::find($userId)->first();
        if(!empty($newDetails["name"])){
            $user->name=$newDetails["name"];
            $user->save();
        }

        return  new UserResource($user);
    }
}