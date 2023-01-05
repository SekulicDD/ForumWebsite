<?php

namespace App\Repositories;

use App\Http\Resources\UserResource;
use App\Interfaces\FriendsRepositoryInterface;
use App\Models\User;


class FriendsRepository implements FriendsRepositoryInterface 
{
    public function getAcceptedFriends($userId)
    {
        $user=User::where('id',$userId)->with("friends.image")->first();
        return UserResource::collection($user->friends);
    }

    public function getIncomingFriends($userId)
    {
        $user=User::where('id',$userId)->with("pendingFriendsFrom.image")->first();
        return UserResource::collection($user->pendingFriendsFrom);
    }

    public function getOutgoingFriends($userId)
    {
        $user=User::where('id',$userId)->with("pendingFriendsTo.image")->first();
        return UserResource::collection($user->pendingFriendsTo);
    }
}