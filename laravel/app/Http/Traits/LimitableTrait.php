<?php
namespace App\Http\Traits;

use Illuminate\Http\Request;

trait LimitableTrait {
    public function limitRequest(Request $request){
        $limit = $request->input('limit', 100);
        return min($limit, 100);
    } 
}