import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { FriendsApiService } from "../../services/friends/friends-api.service";
import { User } from "../user/user.model"
import {  GetUserFriends } from "./friends.action";


interface FriendsStateModel{
    friends: User[];
}

@State<FriendsStateModel>({
    name:'friends',
    defaults:{
        friends:[],
    }
})

@Injectable()
export class FriendsState{
    constructor(private friendService:FriendsApiService){}

    @Action(GetUserFriends)
    getUserFriends({setState}:StateContext<FriendsStateModel>,{userId}:GetUserFriends) {
        return this.friendService.getUserFriends(userId).pipe(
            tap(response => {
                setState({
                    friends:response
                })
            })
        );
    }
}