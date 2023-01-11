<?php

namespace App\Interfaces;

interface FriendsRepositoryInterface 
{
    public function getAcceptedFriends($userId);
    public function getIncomingFriends($userId);
    public function getOutgoingFriends($userId);
    public function friendRequest($userId);
    public function removeFriend($userId);
}

