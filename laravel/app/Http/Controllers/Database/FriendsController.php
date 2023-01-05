<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Repositories\FriendsRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class FriendsController extends Controller
{
    public function __construct(FriendsRepository $friendsRepository) 
    {
        $this->middleware('auth:api', ['except' => ['getUserFriends']]);
        $this->friendsRepository = $friendsRepository;
    }

    public function getFriends(Request $request): JsonResponse{
        $userId = $request->route('user');
        switch ($request->query("status")) {
            case 'incoming':
                return $this->getIncomingFriends($userId);
                break;
            case 'outgoing':
                return $this->getOutgoingFriends($userId);
                break; 
            default:
                return $this->getAcceptedFriends($userId);
                break;
        }   
    }

    private function getAcceptedFriends($userId): JsonResponse{
        return response()->json([
            'data' => $this->friendsRepository->getAcceptedFriends($userId)
        ]);
    }

    private function getIncomingFriends($userId): JsonResponse{
        return response()->json([
            'data' => $this->friendsRepository->getIncomingFriends($userId)
        ]);
    }

    private function getOutgoingFriends($userId): JsonResponse{
        return response()->json([
            'data' => $this->friendsRepository->getOutgoingFriends($userId)
        ]);
    }

    public function destroy(Request $request): JsonResponse 
    {
        $user = $request->route('id');

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
