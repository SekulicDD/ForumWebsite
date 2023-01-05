<?php

namespace App\Interfaces;

interface FriendsRepositoryInterface 
{
    public function getAcceptedFriends($user);
    public function getIncomingFriends($user);
    public function getOutgoingFriends($user);
    // public function addFriend($id);
    // public function removeFriend($id);
}

