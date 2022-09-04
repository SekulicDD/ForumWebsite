<?php

namespace App\Interfaces;

interface CategoryRepositoryInterface 
{
    public function getAllCategories();
    public function getCategory($categoryId);
    public function deleteCategory($categoryId);
    public function createCategory(array $categoryDetails);
    public function updateCategory($categoryId, array $newDetails);

}

