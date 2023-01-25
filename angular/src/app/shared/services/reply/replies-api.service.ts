import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../path';
import { ReplyResponse } from '../../data access/reply/reply.model';

@Injectable({
  providedIn: 'root'
})
export class RepliesApiService {

  constructor(private http:HttpClient) { }

  getRepliesByPostId(postId:number){
    const url=api.url+`/posts/`+postId+`/replies?user=true`;
    return this.http.get<ReplyResponse>(url);
  }
}
