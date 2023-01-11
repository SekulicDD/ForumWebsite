<?php

namespace App\Interfaces;

interface UserRepositoryInterface 
{
    public function getUsers($includes,$limit,$search=null);
    public function getUser($id,$includes);
    public function updateUser($id,array $userDetails);
}

