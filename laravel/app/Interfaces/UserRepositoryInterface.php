<?php

namespace App\Interfaces;

interface UserRepositoryInterface 
{
    public function getUsers($includes);
    public function getUser($id,$includes);
    public function updateUser($id,array $userDetails);
}

