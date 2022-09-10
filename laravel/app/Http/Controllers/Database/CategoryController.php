<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\CategoryRequest;
use App\Repositories\CategoryRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request as HttpRequest;
use Illuminate\Http\Response;

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
    public function index(): JsonResponse 
    {
        return response()->json([
            'data' => $this->categoryRepository->getAllCategories()
        ]);
    }
    public function show(HttpRequest $request): JsonResponse 
    {
        $id = $request->route('id');

        return response()->json([
            'data' => $this->categoryRepository->getCategory($id)
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
        $categoryId = $request->route('id');
        $categoryDetails = $request->only([
            'name',
        ]);

        return response()->json([
            'data' => $this->categoryRepository->updateCategory($categoryId, $categoryDetails)
        ]);
    }

    public function destroy(HttpRequest $request): JsonResponse 
    {
        $categoryId = $request->route('id');
        $this->categoryRepository->deleteCategory($categoryId);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
    
}
