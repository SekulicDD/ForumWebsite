<?php

namespace App\Interfaces;

interface UserRepositoryInterface 
{
    public function getUsers($includes,$limit);
    public function getUser($id,$includes);
    public function updateUser($id,array $userDetails);
}

