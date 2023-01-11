<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class PostResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array|\Illuminate\Contracts\Support\Arrayable|\JsonSerializable
     */
    public function toArray($request)
    {
        
        return [
            'id' => $this->id,
            'title' => $this->title,
            'text_content' => $this->text_content,
            'created_at'=>$this->created_at,
            'updated_at'=>$this->updated_at,
            'replies_count'=>$this->replies_count,
            'category'=>new CategoryResource($this->category),
            'images'=>ImageResource::collection($this->whenLoaded('images')),
            'user'=>new UserResource($this->whenLoaded('user')),
           
        ];
    }
}
