<?php

namespace App\Repositories;

use App\Http\Resources\PostResource;
use App\Interfaces\PostRepositoryInterface;
use App\Models\Post;
use Illuminate\Http\Request;

class PostRepository implements PostRepositoryInterface 
{

    public function getAllPosts($limit,array $sortOptions,$search=null)
    {
        $query=Post::query();
        $query->with("sub_category")
        ->withCount("replies")
        ->with("user")->with("images");
        if(isset($search)){
            $query->where('title', 'like', '%'.$search.'%');
        }
        $query->orderBy($sortOptions["orderBy"],$sortOptions["direction"]);

        return PostResource::collection($query->paginate($limit))->response()->getData();
    } 

    public function getPost($post)
    {
        $post->user=$post->user;
        $post->images=$post->images;
        return new PostResource($post);
    }

    public function getCategoryPosts($categoryId,$includes,$limit,array $sortOptions,$search=null)
    {
        $query=Post::query();
        $query->where("sub_category_id",$categoryId)->withCount("replies");
        foreach ($includes as $value) {
            $query->with($value);
        }
        if(isset($search)){
            $query->where('title', 'like', '%'.$search.'%');
        }
        return PostResource::collection($query
        ->orderBy($sortOptions["orderBy"],$sortOptions["direction"])
        ->paginate($limit))->response()->getData();
    }

    public function getUserPosts($userId,$includes,$limit,array $sortOptions,$search=null)
    {
        $query= Post::query();
        $query->where("user_id",$userId)->withCount("replies");
        foreach ($includes as $value) {
            $query->with($value);
        }
        if(isset($search)){
            $query->where('title', 'like', '%'.$search.'%');
        }
        return PostResource::collection($query
        ->orderBy($sortOptions["orderBy"],$sortOptions["direction"])
        ->paginate($limit))->response()->getData();
    }

    public function deletePost($post){
        $post->delete();
    }

    public function createPost(array $postDetails){
        $post=new Post;
        $post->title=$postDetails["title"];
        $post->sub_category_id=$postDetails["sub_category_id"];
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
             
        if(!empty($newDetails["sub_category_id"])){
            $post->sub_category_id=$newDetails["sub_category_id"];
            $post->save();
        }

        if(!empty($newDetails["text_content"])){
            $post->text_content=$newDetails["text_content"];
            $post->save();
        }


        return new PostResource($post);
    }
}