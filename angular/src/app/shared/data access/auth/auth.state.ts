
import { Injectable } from "@angular/core";
import { Action, Selector, State, StateContext } from "@ngxs/store";
import { tap } from "rxjs";
import { AuthService } from "../../services/auth/auth.service";
import { TokenService } from "../../services/auth/token.service";
import { User } from "../user/user.model";
import { Login, Logout, Register } from "./auth.action";

interface AuthStateModel {
    token:string | null;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
      token: null,
    },
})

@Injectable()
export class AuthState {

    constructor(private service:AuthService,private tokenService:TokenService){}

    @Selector()
    static token(state: AuthStateModel): string | null {
      return state.token;
    }

    @Selector()
    static isAuthenticated(state: AuthStateModel): boolean {
      return !!state.token;
    }
  
    @Action(Login)
    login(ctx: StateContext<AuthStateModel>, action: Login) {
      return this.service.login(action.userAuth).pipe(
        tap((response:any)=> {
          if(this.tokenService.isValidToken(response.authorisation.token)){
            ctx.patchState({
              token: response.authorisation.token,
            });
          }
        })
      );
    }
  
    @Action(Logout)
    logout(ctx: StateContext<AuthStateModel>) {
      ctx.setState({
        token: null,   
      });
    }

    @Action(Register)
    register(action:Register) {
      return this.service.register(action.userAuth);
    }


  
}