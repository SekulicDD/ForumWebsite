<?php

namespace App\Interfaces;

interface MessageRepositoryInterface 
{
    public function getMessage($messageId);
    public function deleteMessage($messageId);
    public function createMessage(array $messageDetails);
    public function updateMessage($messageId,$newText);
}

