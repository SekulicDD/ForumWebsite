import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { RepliesApiService } from "../../services/reply/replies-api.service";
import { GetRepliesByPostId } from "./reply.action";
import { Reply } from "./reply.model";

export class RepliesStateModel{
    replies:Reply[];
    meta:Meta;
}

@State<RepliesStateModel>({
    name:'replies',
    defaults:{
        replies:[],
        meta:{current_page:1,last_page:1,per_page:1,total:1,from:1,to:1,path:"default"},
    },
})

@Injectable()
export class RepliesState{
    constructor(private service:RepliesApiService){}

    @Action(GetRepliesByPostId)
    getRepliesByCategory({getState,setState}:StateContext<RepliesStateModel>,{postId}:GetRepliesByPostId){
        return this.service.getRepliesByPostId(postId).pipe(
            tap(response=>{
                const state = getState();
                setState({
                    ...state,
                    replies:response.data.data,
                    meta:response.data.meta,
                });
            })
        );
    }

}