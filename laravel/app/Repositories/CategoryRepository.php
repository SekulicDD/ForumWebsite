<?php

namespace App\Repositories;

use App\Http\Resources\CategoryResource;
use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;

class CategoryRepository implements CategoryRepositoryInterface 
{
    public function getAllCategories()
    {
        return CategoryResource::collection(Category::all());
    } 

    public function getCategory($category)
    {
        return new CategoryResource($category);
    }

    public function deleteCategory($category){
        $category->delete();
    }

    public function createCategory(array $categoryDetails){
        return new CategoryResource(Category::create($categoryDetails));
    }

    public function updateCategory($categoryId, $newDetails){
        $category=Category::find($categoryId)->first();
        $category->name=$newDetails["name"];
        $category->save();
        return new CategoryResource($category); 
    }
}