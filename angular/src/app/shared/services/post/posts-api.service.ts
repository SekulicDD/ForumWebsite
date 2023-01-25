import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { api } from 'src/app/shared/path';
import { Post, PostsQueryParams, PostsResponse } from '../../data access/post/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsApiService {

  constructor(private http:HttpClient) { }

  getPostsByCategory(categoryId:number,queryParams:PostsQueryParams){

    let httpParams=new HttpParams({fromObject:{...queryParams}});
    const url=api.url+'/categories/'+categoryId+'/posts';

    return this.http.get<PostsResponse>(url,{params:httpParams});
  }

  getPostById(postId:number){
    const url=api.url+'/posts/'+postId;
    return this.http.get<any>(url).pipe(map(response=>{
      const post=response.data;
      return post;
    }));
  }
}
