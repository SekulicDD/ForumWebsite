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
        //use updated_at for latest reply
        $order_by = $request->query('order_by','created_at');
        if (!in_array($order_by, ['created_at', 'updated_at', 'title','replies_count'])) {
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

    private function getSearch(Request $request){
        if($request->filled('search')){
            return trim(strtolower($request->search));
        }
        return null;
    }

    private function includeRelations(Request $request,$includeArr) {
        $queryParams = $request->query();
        return array_filter($includeArr, function ($param) use ($queryParams) {
            return array_key_exists($param,$queryParams);
        });
    }

    public function index(Request $request): JsonResponse 
    {     
       
        return response()->json([
            'data' => $this->postRepository->getAllPosts(
                $this->limitRequest($request),
                $this->getSortOptions($request),
                $this->getSearch($request)
                )
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
 
        return response()->json([
            'data' => $this->postRepository->getCategoryPosts(
                $categoryId,
                $this->includeRelations($request,['images','user','latestReply']),
                $this->limitRequest($request),
                $this->getSortOptions($request),
                $this->getSearch($request))
        ]);
    }

    public function getUserPosts(Request $request): JsonResponse{
        $userId = $request->route('user');

        return response()->json([
            'data' => $this->postRepository->getUserPosts(
                $userId,
                $this->includeRelations($request,['images']),
                $this->limitRequest($request),
                $this->getSortOptions($request),
                $this->getSearch($request))
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
