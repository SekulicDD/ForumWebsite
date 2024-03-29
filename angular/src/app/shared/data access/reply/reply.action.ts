import { PostReply, Reply } from "./reply.model";

export class GetRepliesByPostId {
    static readonly type = '[Replies] Get replies by post id';
    constructor(public postId:number){}
}
  
export class GetRepliesByUserId {
    static readonly type = '[Replies] Get replies by user id';
    constructor(public userId:number,public limit:number=6){}
}
  
export class CreateReply {
    static readonly type = '[Replies] Create new reply';
    constructor(public postId:number,public reply:PostReply){}
}

export class UpdateReply {
    static readonly type = '[Replies] Update reply';
    constructor(public reply:Reply){}
}
  
export class DeleteReply {
    static readonly type = '[Replies] Delete reply';
    constructor(public replyId:number){}
}

