import { Post } from "../post/post.model";
import { User } from "../user/user.model";

export interface Reply{
    id:number;
    text_content:string;
    user?:User;
    post:Post;
    created_at:Date;
    updated_at:Date;
}

export interface PostReply{
    text_content: string;
    user_id: number;
}

export interface ReplyResponse{
    data: {
        data: Reply[],
        meta: Meta
    }
}