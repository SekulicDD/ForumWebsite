<?php

namespace App\Interfaces;

interface PostRepositoryInterface 
{
    public function getAllPosts();
    public function getPostById($postId);
    public function getPostsByCategoryId($categoryId,$includes);
    public function deletePost($postId);
    public function createPost(array $categoryDetails);
    public function updatePost($postId, array $newDetails);

}

