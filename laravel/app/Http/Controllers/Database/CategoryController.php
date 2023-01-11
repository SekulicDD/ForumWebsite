<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Models\Category;
use App\Repositories\CategoryRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Response;
use Illuminate\Http\Request;

class CategoryController extends Controller
{

    private CategoryRepository $categoryRepository;

    public function __construct(CategoryRepository $categoryRepository) 
    {
        $this->categoryRepository = $categoryRepository;
    }
/**
     * @OA\Get(
     *      path="/api/categories",
     *      operationId="getCategories",
     *      tags={"Categories"},
     *      summary="Get list of categories",
     *      description="Returns list of categories",
     *      @OA\Response(
     *          response=200,
     *          description="Successful operation",
     *          @OA\JsonContent()
     *       ),
     *      @OA\Response(
     *          response=401,
     *          description="Unauthenticated",
     *      ),
     *      @OA\Response(
     *          response=403,
     *          description="Forbidden"
     *      )
     *     )
     */

    private function limitRequest(Request $request){
        $limit = $request->input('limit', 100);
        return min($limit, 100);
    }

    public function index(Request $request): JsonResponse 
    {  
        return response()->json([
            'data' => $this->categoryRepository->getAllCategories($this->limitRequest($request))
        ]);
    }
    public function show(Category $category): JsonResponse 
    {
    
        return response()->json([
            'data' => $this->categoryRepository->getCategory($category)
        ]);
    }
   
    public function store(CategoryRequest $request): JsonResponse 
    {
        $categoryDetails = $request->only([
            'name',
        ]);

        return response()->json(
            [
                'data' => $this->categoryRepository->createCategory($categoryDetails)
            ],
            Response::HTTP_CREATED
        );
    }

    public function update(CategoryRequest $request): JsonResponse 
    {
        $categoryId = $request->only('id');
        $categoryDetails = $request->only([
            'name',
        ]);

        return response()->json([
            'data' => $this->categoryRepository->updateCategory($categoryId, $categoryDetails)
        ]);
    }

    public function destroy(Category $category): JsonResponse 
    {
        $this->categoryRepository->deleteCategory($category);
        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
    
}
