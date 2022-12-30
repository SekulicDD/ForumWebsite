<?php

namespace App\Repositories;

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

        return $reply->first();
    } 

    public function getRepliesByUserId($userId,$includes)
    {
        $reply=Reply::where("user_id",$userId);
        foreach ($includes as $value) {
                $reply=$reply->with($value);
        }

        return $reply->get();
    } 

    public function getRepliesByPostId($postId,$includes)
    {
        $reply=Reply::where("post_id",$postId);
        foreach ($includes as $value) {
            $reply=$reply->with($value);
        }

        return $reply->get();
    } 

    public function createReply(array $replyDetails)
    {
        $reply=new Reply();
        $reply->user_id=$replyDetails["user_id"];
        $reply->post_id=$replyDetails["post_id"];
        $reply->text_content=$replyDetails["text_content"];
        $reply->save();
        return $reply;
    } 

    public function updateReply($replyId,$replyDetails)
    {
        $reply=Reply::where("id",$replyId)->first();
        $reply->text_content=$replyDetails;
        $reply->save();
        return $reply;
    } 

    public function deleteReply($replyId)
    {
        Reply::destroy($replyId);
    } 
  
}