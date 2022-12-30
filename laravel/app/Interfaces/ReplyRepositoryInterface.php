<?php

namespace App\Interfaces;

interface ReplyRepositoryInterface 
{
    public function getReply($replyId,$includes);
    public function getRepliesByPostId($postId,$includes);
    public function getRepliesByUserId($userId,$includes);
    public function createReply(array $replyDetails);
    public function updateReply($replyId,$replyDetails);
    public function deleteReply($replyId);
}

