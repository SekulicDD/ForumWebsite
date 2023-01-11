<?php

namespace App\Interfaces;

interface ReplyRepositoryInterface 
{
    public function getReply($replyId,$includes);
    public function getRepliesByPostId($postId,$includes,$limit);
    public function getRepliesByUserId($userId,$includes,$limit);
    public function createReply(array $replyDetails);
    public function updateReply($replyId,$replyDetails);
    public function deleteReply($replyId);
}

