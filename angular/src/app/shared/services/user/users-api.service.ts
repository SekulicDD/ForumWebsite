import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { User, UserQueryParams } from '../../data access/user/user.model';
import { api } from '../../path';

@Injectable({
  providedIn: 'root'
})
export class UsersApiService {

  constructor(private http:HttpClient) { }

  getUserById(id: number,queryParams:UserQueryParams={}): Observable<User> {
    
    let url = api.url + '/users/' + id + '?';
    queryParams.includeRole ? url += 'role=true&' : null;
    queryParams.includeReplies ? url += 'replies=true&' : null;
    queryParams.includeImage ? url += 'image=true&' : null;
    return this.http.get<any>(url).pipe(
      map(response=> {
        return response.data;
      })
    );
  }
}
