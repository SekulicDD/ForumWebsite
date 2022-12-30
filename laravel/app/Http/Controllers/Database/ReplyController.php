<?php

namespace App\Http\Controllers\Database;

use App\Http\Controllers\Controller;
use App\Http\Requests\CreateReplyRequest;
use App\Repositories\ReplyRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response as Response;


class ReplyController extends Controller
{
    private ReplyRepository $replyRepository;
    public function __construct(ReplyRepository $replyRepository) 
    {
        //$this->middleware('auth:api', ['except' => ['show']]);
        $this->replyRepository = $replyRepository;
    }

    private function includeRelations(Request $request){
        $includes=[];
        if($request->query("user")=="true")
            array_push($includes,"user");
        if($request->query("post")=="true")
            array_push($includes,"post");
        return $includes;
    }

    public function getReply(Request $request):JsonResponse{
        $replyId = $request->route('id');

        return response()->json([
            'data' => $this->replyRepository->getReply($replyId,$this->includeRelations($request))
        ]);
    }

    public function getRepliesByUserId(Request $request):JsonResponse{
        $userId = $request->route('userId');

        return response()->json([
            'data' => $this->replyRepository->getRepliesByUserId($userId,$this->includeRelations($request))
        ]);
    }

    public function getRepliesByPostId(Request $request):JsonResponse{
        $postId = $request->route('postId');

        return response()->json([
            'data' => $this->replyRepository->getRepliesByPostId($postId,$this->includeRelations($request))
        ]);
    }

    public function store(CreateReplyRequest $request):JsonResponse{
        $replyDetails = $request->only([
            'post_id',
            'user_id',
            'text_content'
        ]);

        return response()->json(
            [
                'data' => $this->replyRepository
                ->createReply($replyDetails)
            ],
            Response::HTTP_CREATED
        );
    }

    public function update(Request $request): JsonResponse 
    {
        $replyId = $request->only('id');
      
        $replyDetails = $request->only(
            'text_content',
        );

        return response()->json([
            'data' => $this->replyRepository->updateReply($replyId, $replyDetails["text_content"])
        ]);
    }

    public function destroy(Request $request): JsonResponse 
    {
        $replyId = $request->route('id');
        $this->replyRepository->deleteReply($replyId);

        return response()->json(null, Response::HTTP_NO_CONTENT);
    }
}
