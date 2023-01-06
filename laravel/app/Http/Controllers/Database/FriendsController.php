<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\AddFriendRequest;
use App\Models\User;
use App\Repositories\FriendsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FriendsController extends Controller
{

    private $friendsRepository;

    public function __construct(FriendsRepository $friendsRepository) 
    {
        $this->middleware('auth:api', ['except' => ['getUserFriends']]);
        $this->friendsRepository = $friendsRepository;
    }

    public function getAcceptedFriends(Request $request): JsonResponse{
        $userId = $request->route('user');
        return response()->json([
            'data' => $this->friendsRepository->getAcceptedFriends($userId)
        ]);
    }

    public function getIncomingFriends(Request $request): JsonResponse{
        $userId = $request->route('user');
        return response()->json([
            'data' => $this->friendsRepository->getIncomingFriends($userId)
        ]);
    }

    public function getOutgoingFriends(Request $request): JsonResponse{
        $userId = $request->route('user');
        return response()->json([
            'data' => $this->friendsRepository->getOutgoingFriends($userId)
        ]);
    }

    public function store(User $user): JsonResponse 
    {
        return $this->friendsRepository->friendRequest($user->id);
    }

    public function destroy(Request $request): JsonResponse 
    {
        $userId = $request->route('user');
        if($this->friendsRepository->removeFriend($userId))
            return response()->json([],204);
        return response()->json([
            'Error' => "Error bad request",
        ],400);
    }
}
