<?php

namespace App\Interfaces;

interface PostRepositoryInterface 
{
    public function getAllPosts($limit);
    public function getPost($postId);
    public function getCategoryPosts($categoryId,$includes,$limit);
    public function getUserPosts($userId,$includes,$limit);
    public function deletePost($postId);
    public function createPost(array $categoryDetails);
    public function updatePost($postId, array $newDetails);

}

