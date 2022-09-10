<?php

namespace App\Interfaces;

interface UserRepositoryInterface 
{
    public function getUser($id,$includes);
    public function updateUser($id,array $userDetails);
}

