import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Post } from "./post.model";
import { PostsApiService } from "../../services/post/posts-api.service";
import { GetPostById, GetPostsByCategory } from "./post.action";
import { tap } from "rxjs";

export class PostsStateModel{
    posts:Post[];
    meta:Meta;
    current_post?:Post;
}

@State<PostsStateModel>({
    name:'posts',
    defaults:{
        posts:[],
        meta:{current_page:1,last_page:1,per_page:1,total:1,from:1,to:1,path:"default"},
    },
})

@Injectable()
export class PostsState{
    constructor(private service:PostsApiService){}

    @Selector()
    static getPosts(state:PostsStateModel){
        return state.posts;
    }

    @Action(GetPostsByCategory)
    getPostsByCategory({getState,setState}:StateContext<PostsStateModel>,{categoryId,includes}:GetPostsByCategory){
        return this.service.getPostsByCategory(categoryId,includes).pipe(
            tap(response=>{
                const state = getState();
                setState({
                    ...state,
                    posts:response.data.data,
                    meta:response.data.meta,
                });
            })
        );
    }

    @Action(GetPostById)
    getPostById({getState,setState}:StateContext<PostsStateModel>,{id}:GetPostById){
        return this.service.getPostById(id).pipe(
            tap(response=>{
                const state=getState();
                setState({
                    ...state,
                    current_post:response
                });
            })
        );
    }
    
}