import { Injectable } from '@angular/core';
import { api } from '../../path';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  constructor() { }

  private issuer = {
    login: api.url+'/auth/login',
    register: api.url+'/auth/register',
  };

  getToken() {
    return localStorage.getItem('auth.token');
  }

  private payload(token: string) {
    const payload = token.split('.')[1];
    return JSON.parse(atob(payload));
  }

  isValidToken(token:string | null) : boolean {
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.issuer).indexOf(payload.iss) > -1;
      }
    }
    return false;
  }

  getIdFromToken(token:string):number{
    const payload = this.payload(token);
    return payload.sub;
  }

}
