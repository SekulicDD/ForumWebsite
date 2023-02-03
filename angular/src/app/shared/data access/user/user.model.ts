import { Image } from "../image/image.model";

export interface User{
    id:number;
    name:string;
    email:string;
    created_at:Date;
    image:Image;
}

export interface UserQueryParams{
    includeImage?: boolean;
    includeRole?: boolean;
    includeReplies?: boolean;
}