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
 
    private function limitRequest(Request $request){
        $limit = $request->only('limit');
        if($limit)
            $limit=(int)$limit['limit'];
        if($limit>100)
            $limit==100;
        return $limit;
    }

    private function includeRelations(Request $request){
        $includes=[];
        if($request->query("user")=="true")
            array_push($includes,"user");
        if($request->query("post")=="true")
            array_push($includes,"post");
        if($request->query("reply")=="true")
            array_push($includes,"reply");
        return $includes;
    }

    public function getReply(Request $request):JsonResponse{
        $replyId = $request->route('id');

        return response()->json([
            'data' => $this->replyRepository->getReply($replyId,$this->includeRelations($request))
        ]);
    }

    public function getUserReplies(Request $request):JsonResponse{
        $userId = $request->route('userId');

        return response()->json([
            'data' => $this->replyRepository->getRepliesByUserId($userId,
            $this->includeRelations($request),
            $this->limitRequest($request))
        ]);
    }

    public function getPostReplies(Request $request):JsonResponse{
        $postId = $request->route('postId');

        return response()->json([
            'data' => $this->replyRepository->getRepliesByPostId($postId,
            $this->includeRelations($request),
            $this->limitRequest($request))
        ]);
    }

    public function store(CreateReplyRequest $request):JsonResponse{
        $replyDetails = $request->only([
            'user_id',
            'text_content'
        ]);

        $replyDetails['post_id'] = $request->route('post');

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
