<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreatePostRequest;
use App\Http\Requests\UpdatePostRequest;
use App\Http\Resources\PostResource;
use App\Http\Traits\LimitableTrait;
use App\Models\Post;
use App\Repositories\PostRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;
use Illuminate\Validation\Rule;

class PostController extends Controller
{
    private PostRepository $postRepository;
    use LimitableTrait;

    public function __construct(PostRepository $postRepository) 
    {
        $this->middleware('auth:api', ['except' => ['index','getPostById','getCategoryPosts','getUserPosts']]);
        $this->postRepository = $postRepository;
    }

    private function getSortOptions(Request $request)
    {
        $order_by = $request->query('order_by','created_at');
        if (!in_array($order_by, ['created_at', 'updated_at', 'title'])) {
            $order_by = 'created_at';
        }

        $direction = strtolower($request->get('direction', 'asc')); 
        if (!in_array($direction, ['asc', 'desc'])) {
            $direction = 'asc';
        }
    
        return [
            "orderBy" => $order_by,
            "direction"=> $direction
        ];
    }

    public function index(Request $request): JsonResponse 
    {     
        return response()->json([
            'data' => $this->postRepository->getAllPosts(
                $this->limitRequest($request),
                $this->getSortOptions($request))
        ]);
    }
    public function getPostById(Post $post) : JsonResponse 
    { 
        return response()->json([
            'data' => $this->postRepository->getPost($post)
        ]);
    }
    
    public function getCategoryPosts(Request $request): JsonResponse{
        $categoryId = $request->route('category');

        $includes=[];
        if($request->query("images"))
            array_push($includes,"images");
        if($request->query("user"))
            array_push($includes,"user");
        
        return response()->json([
            'data' => $this->postRepository->getCategoryPosts(
                $categoryId,$includes,
                $this->limitRequest($request),
                $this->getSortOptions($request))
        ]);
    }

    public function getUserPosts(Request $request): JsonResponse{
        $userId = $request->route('user');

        $includes=[];
        if($request->query("images"))
            array_push($includes,"images");
        
        return response()->json([
            'data' => $this->postRepository->getUserPosts(
                $userId,$includes,
                $this->limitRequest($request),
                $this->getSortOptions($request))
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
            'data' => $this->postRepository->updatePost($postId, $postDetails)
        ]);
    }

    public function destroy(Post $post): JsonResponse 
    {
        $this->postRepository->deletePost($post);
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
