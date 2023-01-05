<?php

namespace App\Interfaces;

interface PostRepositoryInterface 
{
    public function getAllPosts();
    public function getPost($postId);
    public function getCategoryPosts($categoryId,$includes);
    public function getUserPosts($userId,$includes);
    public function deletePost($postId);
    public function createPost(array $categoryDetails);
    public function updatePost($postId, array $newDetails);

}

