import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User } from '../../data access/user/user.model';
import { api } from '../../path';

@Injectable({
  providedIn: 'root'
})
export class FriendsApiService {

  constructor(private http: HttpClient) { }
  
  getUserFriends(userId:number):Observable<User[]> {
    const url = api.url + '/users/' + userId + '/friend-requests';
    return this.http.get<any>(url).pipe(
      map(response => {
        return response.data;
      })
    )
  }
}
