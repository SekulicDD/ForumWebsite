import { SubCategory } from "../category/category.model";
import { Image } from "../image/image.model";
import "../meta.model";
import { Paginateable } from "../paginateable.interface";
import { Reply } from "../reply/reply.model";
import { Sortable } from "../sortable.interface";
import { User } from "../user/user.model";

export interface Post{
    id:number;
    title:string;
    text_content:string;
    category:SubCategory;
    user:User;
    created_at:Date;
    updated_at:Date;
    replies_count:number;
    latestReply?:Reply;
    images?:Image[];
    replies?:Reply[];
}

export interface PostsResponse{
    data: {
        data: Post[],
        meta: Meta
    }
}

export interface PostsQueryParams extends Paginateable,Sortable{
    images?:boolean;
    user?:boolean;
    latestReply?:boolean;
    order_by?: PostsOrderBy;
    limit?: number;
}

export enum PostsOrderBy{
    Title = 'title',
    Date = 'created_at',
    LatestReply='updated_at',
    ReplyCount='replies_count'
}

