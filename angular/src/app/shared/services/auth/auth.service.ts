import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../../data access/user/user.model';
import { api } from '../../path';
import { TokenService } from './token.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }

  register(user:UserAuth) {
    return this.http.post(api.url+'/auth/register', user);
  }

  login(user:UserAuth) {
    return this.http.post(api.url+'/auth/login', user);
  }

  // userProfile(){
  //   const token = this.tokenService.getToken();
  //   if(token)
  //     return this.http.get<User>(api.url+'/auth/user-profile');
  //   else return null;
  // }

  resetPassword(data:UserAuth){
    return this.http.post<any>(api.url+'/auth/reset-password', data);
  }

  changePassword(data:any){
    return this.http.post<any>(api.url+'/auth/change-password', data);
  }

}

export interface UserAuth {
  email: string ;
  password: string;
  name?:string;
}

