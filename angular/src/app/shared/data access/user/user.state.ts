import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { UsersApiService } from "../../services/user/users-api.service";
import { User } from "../user/user.model"
import { GetAuthUser, GetUserById } from "./user.action";

interface UserStateModel{
    user: User | null;
    authUser: User | null;
}

@State<UserStateModel>({
    name:'user',
    defaults:{
        user: null,
        authUser:null
    }
})

@Injectable()
export class UserState{
    constructor(private userService: UsersApiService) { }
    
    @Action(GetUserById)
    getUserById({getState,setState}:StateContext<UserStateModel>,{id,queryParams}:GetUserById){
        return this.userService.getUserById(id,queryParams).pipe(
            tap(response => {
                let state = getState();
                setState({
                    ...state,
                    user: response
                })
            })
        );
    }

    @Action(GetAuthUser)
    getAuthUser({setState,getState}:StateContext<UserStateModel>,{id,queryParams}:GetAuthUser){
        return this.userService.getUserById(id,queryParams).pipe(
            tap(response => {
                let state = getState();
                setState({
                    ...state,
                    authUser: response
                })
            })
        );
    }

}