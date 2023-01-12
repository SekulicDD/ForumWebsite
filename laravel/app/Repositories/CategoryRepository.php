<?php

namespace App\Repositories;

use App\Http\Resources\CategoryResource;
use App\Interfaces\CategoryRepositoryInterface;
use App\Models\Category;

class CategoryRepository implements CategoryRepositoryInterface 
{
    public function getAllCategories($perPage)
    {  
       
        return CategoryResource::collection(Category::with("sub_categories")->paginate($perPage))->response()->getData();
    } 

    public function getCategory($category)
    {
        //$category->sub_categories=$category->sub_categories;
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