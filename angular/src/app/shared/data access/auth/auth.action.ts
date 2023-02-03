import { UserAuth } from "../../services/auth/auth.service";

export class Login {
    static readonly type = '[Auth] Login';
    constructor(public userAuth:UserAuth) {}
}
  
export class Logout {
    static readonly type = '[Auth] Logout';
}

export class Register{
    static readonly type = '[Auth] Register new user';
    constructor(public userAuth:UserAuth) {}
}


