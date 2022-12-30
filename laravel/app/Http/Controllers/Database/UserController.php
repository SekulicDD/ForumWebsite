<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class UserController extends Controller
{
    private UserRepository $userRepository;
    public function __construct(UserRepository $userRepository) 
    {
        $this->middleware('auth:api', ['except' => ['show']]);
        $this->userRepository = $userRepository;
    }

    public function show(Request $request): JsonResponse{
        $userId = $request->route('id');

        $includes=[];
        
        if($request->query("messages"))
            array_push($includes,"messages");
        if($request->query("image"))
            array_push($includes,"image");
        if($request->query("friends"))
            array_push($includes,"friends");
        if($request->query("role"))
            array_push($includes,"role");
        
        return response()->json([
            'data' => $this->userRepository->getUser($userId,$includes)
        ]);
    }

    public function update(Request $request): JsonResponse 
    {
        $userId = $request->route('id');
        $userDetails = $request->only([
            'name',
        ]);
        //ADD IMAGE CHANGE
        return response()->json([
            'data' => $this->userRepository->updateUser($userId, $userDetails)
        ]);
    }
}
