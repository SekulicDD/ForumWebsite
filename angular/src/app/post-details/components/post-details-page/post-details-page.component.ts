import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/shared/data access/auth/auth.state';
import { GetPostById } from 'src/app/shared/data access/post/post.action';
import { Post } from 'src/app/shared/data access/post/post.model';
import { GetRepliesByPostId } from 'src/app/shared/data access/reply/reply.action';
import { Reply } from 'src/app/shared/data access/reply/reply.model';

@Component({
  selector: 'app-post-details-page',
  templateUrl: './post-details-page.component.html',
  styleUrls: ['./post-details-page.component.css']
})
export class PostDetailsPageComponent implements OnInit {

  constructor(private store:Store,private route:ActivatedRoute) {
  }


  post$:Observable<Post>=this.store.select(state=>state.posts.current_post);
  replies$:Observable<Reply[]>=this.store.select(state=>state.replies.replies);
  isAuth: Boolean = this.store.selectSnapshot(AuthState.isAuthenticated);

  id:number=1;

  ngOnInit(): void {
    let id=this.route.snapshot.paramMap.get('id');
    if(id)
      this.id=parseInt(id);
    this.store.dispatch(new GetPostById(this.id));
    this.store.dispatch(new GetRepliesByPostId(this.id));
  }

}
