import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { api } from '../../path';
import { PostReply, Reply, ReplyResponse } from '../../data access/reply/reply.model';
import {map, Observable } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class RepliesApiService {

  constructor(private http:HttpClient) { }

  getRepliesByPostId(postId:number){
    const url=api.url+`/posts/`+postId+`/replies?user=true`;
    return this.http.get<ReplyResponse>(url);
  }

  getRepliesByUserId(userId:number,limit:number){
    const url = api.url + `/users/` + userId + `/replies?limit=`+limit;
    return this.http.get<ReplyResponse>(url);
  }
  
  postReply(postId: number, reply: PostReply): Observable<Reply> {
    const url = `${api.url}/posts/${postId}/replies`;
    return this.http.post<any>(url, reply).pipe(map(
      response => {
      return response.data;
    }));
  }

  updateReply(replyId: number, content: string) {
    const url = `${api.url}/replies`;
    return this.http.put(url, { id: replyId, text_content: content });
  }


  deleteReply(replyId:number) {
    const url = `${api.url}/replies/${replyId}`;
    return this.http.delete(url);
  }
}
