import { Injectable } from '@angular/core';
import { api } from '../../path';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private issuer = {
    login: api.url+'/login',
    register: api.url+'/register',
  };

  getToken() {
    return localStorage.getItem('auth_token');
  }

  payload(token: any) {
    const payload = token.split('.')[1];
    return JSON.parse(payload);
  }

  isValidToken() {
    const token = this.getToken();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

  isLoggedIn() {
    return this.isValidToken();
  }

}
