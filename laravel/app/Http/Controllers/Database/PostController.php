<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Repositories\MessageRepository;
use App\Repositories\PostRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    private PostRepository $postRepository;
    private MessageRepository $messageRepository;

    public function __construct(PostRepository $postRepository,MessageRepository $messageRepository) 
    {
        $this->postRepository = $postRepository;
        $this->messageRepository = $messageRepository;
    }

    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->postRepository->getAllPosts()
        ]);
    }
    public function getPostById(Request $request): JsonResponse 
    {
        $id=$request->route('id');
   
        return response()->json([
            'data' => $this->postRepository->getPostById($id)
        ]);
    }
    
    public function getPostsByCategoryId(Request $request): JsonResponse{
        $categoryId = $request->route('categoryId');

        $includes=[];
        
        if($request->query("images"))
            array_push($includes,"images");
        if($request->query("category"))
            array_push($includes,"category");
        if($request->query("replies"))
            array_push($includes,"replies");
        
        return response()->json([
            'data' => $this->postRepository->getPostsByCategoryId($categoryId,$includes)
        ]);
    }

   
    public function store(CreatePostRequest $request): JsonResponse 
    {
        $messageDetails = $request->only([
            'user_id',
            'text_content'
        ]);

        $messageId=$this->messageRepository->createMessage($messageDetails);
        $postDetails = $request->only([
            'title',
            'category_id'
        ]);
        $postDetails["message_id"]=$messageId->id;
        
        return response()->json(
            [
                'data' => $this->postRepository
                ->createpost($postDetails)
            ],
            Response::HTTP_CREATED
        );
    }

    public function update(UpdatePostRequest $request): JsonResponse 
    {
        $postId = $request->only('id');
        $messageId=$request->only('message_id');

        $messageDetails = $request->only([
            'text_content'
        ]);

        if(!empty($messageDetails["text_content"]))
            $messageId=$this->messageRepository->updateMessage($messageId,$messageDetails["text_content"]);
        $postDetails = $request->only([
            'title',
            'category_id'
        ]);

        return response()->json([
            'data' => $this->postRepository->updatepost($postId, $postDetails)
        ]);
    }

    public function destroy(Request $request): JsonResponse 
    {
        $postId = $request->route('id');
        $this->postRepository->deletepost($postId);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
