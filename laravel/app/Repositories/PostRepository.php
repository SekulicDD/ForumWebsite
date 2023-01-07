<?php

namespace App\Repositories;

use App\Http\Resources\PostResource;
use App\Interfaces\PostRepositoryInterface;
use App\Models\Post;

class PostRepository implements PostRepositoryInterface 
{
    public function getAllPosts($limit)
    {
        return PostResource::collection(Post::with("category")
        ->with("user")->with("images")->paginate($limit))->response()->getData();
    } 

    public function getPost($post)
    {
        $post->user=$post->user;
        $post->images=$post->images;
        return new PostResource($post);
    }

    public function getCategoryPosts($categoryId,$includes,$limit)
    {
        $post= Post::where("category_id",$categoryId);
        foreach ($includes as $value) {
            $post=$post->with($value);
        }
      
        return PostResource::collection($post->paginate($limit))->response()->getData();
    }

    public function getUserPosts($userId,$includes,$limit)
    {
        $post= Post::where("user_id",$userId);
        foreach ($includes as $value) {
            $post=$post->with($value);
        }
      
        return PostResource::collection($post->paginate($limit))->response()->getData();
    }

    public function deletePost($post){
        $post->delete();
    }

    public function createPost(array $postDetails){
        $post=new Post;
        $post->title=$postDetails["title"];
        $post->category_id=$postDetails["category_id"];
        $post->user_id=$postDetails["user_id"];
        $post->text_content=$postDetails["text_content"];
        $post->save();
        return new PostResource($post);
       
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

        if(!empty($newDetails["text_content"])){
            $post->text_content=$newDetails["text_content"];
            $post->save();
        }


        return new PostResource($post);
    }
}