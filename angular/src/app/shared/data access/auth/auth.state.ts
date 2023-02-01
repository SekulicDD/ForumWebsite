import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { AuthService } from "../../services/auth/auth.service";
import { User } from "../user/user.model";
import { Login, Logout, Register } from "./auth.action";

interface AuthStateModel {
    token:string | null;
    user: User | null;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
      token: null,
      user:null,
    },
})

@Injectable()
export class AuthState {

    constructor(private service:AuthService){}

    @Selector()
    static token(state: AuthStateModel): string | null {
      return state.token;
    }

    @Selector()
    static user(state: AuthStateModel): User | null {
      return state.user;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }

    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
      return this.service.login(action.userAuth).pipe(
        tap((response:any)=> {
          ctx.patchState({
            token: response.authorisation.token,
            user: response.user
          });
        })
      );
    }
  
    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
      ctx.setState({
        token: null,
        user: null
      });
    }

    @Action(Register)
    register(ctx: StateContext<AuthStateModel>,action:Register) {
      return this.service.register(action.userAuth);
    }
  
}