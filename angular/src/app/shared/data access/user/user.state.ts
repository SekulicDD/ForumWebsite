import { Injectable } from "@angular/core";
import { Action, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { UsersApiService } from "../../services/user/users-api.service";
import { User } from "../user/user.model"
import { GetUserById } from "./user.action";

interface UserStateModel{
    user:User | null;
}

@State<UserStateModel>({
    name:'user',
    defaults:{
        user:null,
    }
})

@Injectable()
export class UserState{
    constructor(private userService:UsersApiService){}

    @Action(GetUserById)
    getUserById({setState}:StateContext<UserStateModel>,{id,queryParams}:GetUserById){
        return this.userService.getUserById(id,queryParams).pipe(
            tap(response => {
                setState({
                    user: response
                })
            })
        );
    }
    

}