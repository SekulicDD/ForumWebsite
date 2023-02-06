export class GetUserFriends {
    static readonly type = '[Friends] Get friends by user id';
    constructor(public userId:number,public limit:number=6){}
}