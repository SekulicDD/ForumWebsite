import { UserQueryParams } from "./user.model";

export class GetUserById {
    static readonly type = '[User] Get user by id';
    constructor(public id:number,public queryParams:UserQueryParams) {}
}
  
export class GetAuthUser {
    static readonly type = '[User] Get auth user by id';
    constructor(public id:number,public queryParams:UserQueryParams) {}
}