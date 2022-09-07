<?php

namespace App\Repositories;

use App\Interfaces\PostRepositoryInterface;
use App\Models\Post;

class PostRepository implements PostRepositoryInterface 
{
    public function getAllPosts()
    {
        return Post::with("category")
        ->with("message.user")->all();
    } 

    public function getPostById($postId)
    {
        $post=Post::with("category")
        ->with("message.user")
        ->with("images")
        ->with("replies")
        ->where("id",$postId)->first();
        return $post;
    }

    public function getPostsByCategoryId($categoryId,$includes)
    {
        $post= Post::where("category_id",$categoryId)->with("message.user");
        foreach ($includes as $value) {
            $post=$post->with($value);
        }
      
        return $post->get();
    }

    public function deletePost($postId){
        Post::destroy($postId);
    }

    public function createPost(array $postDetails){
        $post=new Post;
        $post->title=$postDetails["title"];
        $post->category_id=$postDetails["category_id"];
        $post->message_id=$postDetails["message_id"];
        $post->save();
        return $post;
       
    }

    public function updatePost($postId, array $newDetails){
        $post=Post::find($postId)->first();
        if(!empty($newDetails["title"])){
            $post->title=$newDetails["title"];
            $post->save();
        }
             
        if(!empty($newDetails["category_id"])){
            $post->category_id=$newDetails["category_id"];
            $post->save();
        }

        return $post;
    }
}