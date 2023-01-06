<?php

namespace App\Repositories;

use App\Http\Resources\UserResource;
use App\Interfaces\FriendsRepositoryInterface;
use App\Models\User;
use App\Models\UserFriend;

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

    public function friendRequest($userId){
        $userFriend=UserFriend::where("user_id",auth()->user()->id)->where("friend_id",$userId)->first();
        if($userFriend){
            if($userFriend->accepted==true)
                return response()->json(['Error' => 'Users already friends', ],400);
            return response()->json(['Error' => 'Friend request already sent', ],400);
        }
                
        $userFriend=UserFriend::where("friend_id",auth()->user()->id)->where("user_id",$userId)->first();
        if($userFriend)
            return $this->acceptRequest($userFriend);
        
        return $this->sendRequest($userId);   
    }

    private function sendRequest($userId)
    {
        $friend=new UserFriend();
        $friend->user_id = auth()->user()->id;
        $friend->friend_id = $userId;
        $friend->accepted = false;
        $friend->save();
        return response()->json(['data' => $friend]);
    }

    private function acceptRequest($userFriend){
        if($userFriend->accepted==true)
            return response()->json(['Error' => 'Users already friends', ],400);
        $userFriend->accepted=true;
        $userFriend->save();
        return response()->json(['data' => $userFriend]);
    }

    public function removeFriend($userId){
        $user=UserFriend::where("user_id",auth()->user()->id)->where("friend_id",$userId);
        if($user)
            return $user->delete();

        $user=UserFriend::where("friend_id",auth()->user()->id)->where("user_id",$userId);
        if($user)
            return $user->delete();   

        return false;
    }
}