import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Post } from "./post.model";
import { PostsApiService } from "../../services/post/posts-api.service";
import { GetPostsByCategory } from "./post.action";
import { tap } from "rxjs";

export class PostsStateModel{
    posts:Post[];
    meta?:Meta;
}

@State<PostsStateModel>({
    name:'posts',
    defaults:{
        posts:[],
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
    
}