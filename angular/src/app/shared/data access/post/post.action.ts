import { PostsQueryParams } from "./post.model";

export class GetPostsByCategory {
    static readonly type = '[Posts] Get posts by category id';
    constructor(public categoryId:number,public query:PostsQueryParams={}){}
}
  
export class GetPostById {
    static readonly type = '[Posts] Get post by id';
    constructor(public id:number){}
}
  
export class GetUserPosts {
    static readonly type = '[Posts] Get posts by user id';
    constructor(public userId:number,public query:PostsQueryParams={}){}
}