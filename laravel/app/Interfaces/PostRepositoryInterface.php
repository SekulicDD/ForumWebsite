<?php

namespace App\Interfaces;

interface PostRepositoryInterface 
{
    public function getAllPosts($limit,array $sortOptions,$search=null);
    public function getPost($postId);
    public function getCategoryPosts($categoryId,$includes,$limit,array $sortOptions,$search=null);
    public function getUserPosts($userId,$includes,$limit,array $sortOptions,$search=null);
    public function deletePost($postId);
    public function createPost(array $categoryDetails);
    public function updatePost($postId, array $newDetails);

}

