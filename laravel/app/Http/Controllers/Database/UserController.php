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

    private function includeRelations(Request $request){
        $includes=[]; 
        if($request->query("role"))
            array_push($includes,"role");
        if($request->query("image"))
            array_push($includes,"image");
        return $includes;    
    }

    public function index(Request $request): JsonResponse{ 
        return response()->json([
            'data' => $this->userRepository->getUsers($this->includeRelations($request))
        ]);
    }

    public function show(Request $request): JsonResponse{
        $userId = $request->route('user');

        $includes=$this->includeRelations($request);
        // if($request->query("friends"))
        //     array_push($includes,"friends"); //friends to, friend from

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
