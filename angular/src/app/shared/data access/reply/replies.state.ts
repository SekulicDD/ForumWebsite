import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { ToastrService } from "ngx-toastr";
import { tap } from "rxjs";
import { RepliesApiService } from "../../services/reply/replies-api.service";
import { CreateReply, DeleteReply, GetRepliesByPostId, GetRepliesByUserId, UpdateReply } from "./reply.action";
import { Reply } from "./reply.model";


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
    constructor(private service:RepliesApiService,private toast:ToastrService){}

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
                //console.log(response);
                patchState({
                    replies: [response,...state.replies],
                    //meta: state.meta
                });
                this.toast.success("Comment succesfully created!", "", {
                    positionClass: 'toast-bottom-right',
                    onActivateTick: true,  
                });
            })
        );
    }

    @Action(UpdateReply)
    updateReply({ getState, patchState }: StateContext<RepliesStateModel>, {reply:editReply}: UpdateReply) {
        return this.service.updateReply(editReply.id,editReply.text_content).pipe(
            tap(response => {
                const state = getState();
                const replies = state.replies.map(reply => {
                    if (reply.id == editReply.id)
                        return editReply;
                    else
                        return reply;
                });
                patchState({
                    replies: replies
                });
                this.toast.success("Comment succesfully updated!", "", {
                    positionClass: 'toast-bottom-right',
                    onActivateTick: true,  
                });
            })
        );
    }


    @Action(DeleteReply)
    deleteReply({ getState, patchState }: StateContext<RepliesStateModel>, {replyId }: DeleteReply) {
        return this.service.deleteReply(replyId).pipe(
            tap(response => {
                const state = getState();
                patchState({
                    replies: state.replies.filter(reply => reply.id != replyId)
                });
                this.toast.success("Comment succesfully deleted!", "", {
                    positionClass: 'toast-bottom-right',
                    onActivateTick: true,  
                });
            })
        );
    }

}