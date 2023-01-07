<?php

namespace App\Repositories;

use App\Http\Resources\ReplyResource;
use App\Interfaces\ReplyRepositoryInterface;
use App\Models\Reply;

class ReplyRepository implements ReplyRepositoryInterface 
{
    public function getReply($replyId,$includes)
    {
        $reply=Reply::where("id",$replyId);  
        
        foreach ($includes as $value) {
            $reply=$reply->with($value);
        }

        return new ReplyResource($reply->first());
    } 

    public function getRepliesByUserId($userId,$includes,$limit)
    {
        $reply=Reply::where("user_id",$userId);
        foreach ($includes as $value) {
                $reply=$reply->with($value);
        }

        return ReplyResource::collection($reply->paginate($limit));
    } 

    public function getRepliesByPostId($postId,$includes,$limit)
    {
        $reply=Reply::where("post_id",$postId);
        foreach ($includes as $value) {
            $reply=$reply->with($value);
        }

        return ReplyResource::collection($reply->paginate($limit));
    } 

    public function createReply(array $replyDetails)
    {
        $reply=new Reply();
        $reply->user_id=$replyDetails["user_id"];
        $reply->post_id=$replyDetails["post_id"];
        $reply->text_content=$replyDetails["text_content"];
        $reply->save();
        return new ReplyResource($reply);
    } 

    public function updateReply($replyId,$replyDetails)
    {
        $reply=Reply::where("id",$replyId)->first();
        $reply->text_content=$replyDetails;
        $reply->save();
        return new ReplyResource($reply);
    } 

    public function deleteReply($replyId)
    {
        Reply::destroy($replyId);
    } 
  
}