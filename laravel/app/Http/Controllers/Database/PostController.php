<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Repositories\PostRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class PostController extends Controller
{
    private PostRepository $postRepository;

    public function __construct(PostRepository $postRepository) 
    {
        $this->middleware('auth:api', ['except' => ['index','getPostById','getPostsByCategoryId']]);
        $this->postRepository = $postRepository;
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
        
        if($request->query("images")=="true")
            array_push($includes,"images");
        if($request->query("category")=="true")
            array_push($includes,"category");
        if($request->query("replies")=="true")
            array_push($includes,"replies");
        
        return response()->json([
            'data' => $this->postRepository->getPostsByCategoryId($categoryId,$includes)
        ]);
    }

   
    public function store(CreatePostRequest $request): JsonResponse 
    {
  
        $postDetails = $request->only([
            'title',
            'category_id',
            'user_id',
            'text_content'
        ]);
        
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
      
        $postDetails = $request->only([
            'title',
            'text_content',
            'category_id'
        ]);

        return response()->json([
            'data' => $this->postRepository->updatepost($postId, $postDetails)
        ]);
    }

    public function destroy(Request $request): JsonResponse 
    {
        $postId = $request->route('id');
        $this->postRepository->deletePost($postId);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
