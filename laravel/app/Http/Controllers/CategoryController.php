<?php

namespace App\Http\Controllers;

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
   
    public function store(HttpRequest $request): JsonResponse 
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

    public function update(HttpRequest $request): JsonResponse 
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
