<?php

namespace App\Repositories;

use App\Interfaces\MessageRepositoryInterface;
use App\Models\Message;

class MessageRepository implements MessageRepositoryInterface 
{
    public function getMessage($messageId)
    {
        return Message::findOrFail($messageId);
    }

    public function deleteMessage($messageId){
        Message::destroy($messageId);
    }

    public function createMessage(array $messageDetails)
    {
        $message=new Message;
        $message->user_id=$messageDetails["user_id"];
        $message->text_content=$messageDetails["text_content"];
        $message->save();
        return $message;
    }

    public function updateMessage($messageId,$newText){
        $message=Message::find($messageId)->first();
        $message->text_content=$newText;
        $message->save();
        return $message;
    }
}