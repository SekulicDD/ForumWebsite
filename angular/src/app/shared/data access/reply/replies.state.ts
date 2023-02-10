import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { RepliesApiService } from "../../services/reply/replies-api.service";
import { CreateReply, GetRepliesByPostId, GetRepliesByUserId } from "./reply.action";
import { PostReply, Reply } from "./reply.model";

export class RepliesStateModel{
    replies:Reply[];
    meta: Meta;
    userReplies: Reply[];
    userRepliesMeta?: Meta;
}

@State<RepliesStateModel>({
    name:'replies',
    defaults:{
        replies:[],
        meta: { current_page: 1, last_page: 1, per_page: 1, total: 1, from: 1, to: 1, path: "default" },
        userReplies:[]
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

    @Action(GetRepliesByUserId)
    getRepliesByUser({getState,setState}:StateContext<RepliesStateModel>,{userId,limit}:GetRepliesByUserId){
        return this.service.getRepliesByUserId(userId,limit).pipe(
            tap(response => {
                const state = getState();
                setState({
                    ...state,
                    userReplies:response.data.data,
                    userRepliesMeta: response.data.meta,        
                });
            })
        );
    }

    @Action(CreateReply)
    postReply({ getState, patchState }: StateContext<RepliesStateModel>, { postId, reply }: CreateReply) {
        return this.service.postReply(postId,reply).pipe(
            tap(response => {
                const state = getState();
                //state.meta.total++;
                console.log(response);
                patchState({
                    replies: [response,...state.replies],
                    //meta: state.meta
                });
            })
        );
    }

}