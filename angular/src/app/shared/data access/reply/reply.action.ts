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
  