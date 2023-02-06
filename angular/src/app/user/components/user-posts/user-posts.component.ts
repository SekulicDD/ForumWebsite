import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { GetUserPosts } from 'src/app/shared/data access/post/post.action';
import { Post } from 'src/app/shared/data access/post/post.model';

@Component({
  selector: 'app-user-posts',
  templateUrl: './user-posts.component.html',
  styleUrls: ['./user-posts.component.css']
})
export class UserPostsComponent implements OnInit {

  constructor(private store:Store) { }

  @Input() userId: number;
  posts$: Observable<Post[]> = this.store.select(state => state.posts.userPosts);
  meta$: Observable<Meta> = this.store.select(state => state.posts.userPostsMeta);
  postsLimit: number = 6;
  postsTotal: number
  sub: Subscription;

  ngOnInit(): void {
    this.getData();
    this.sub=this.meta$.subscribe(meta => {
      if (meta)
        this.postsTotal = meta.total;
    })
  }

  getData() {
    this.store.dispatch(new GetUserPosts(this.userId, { limit: this.postsLimit }));
  }

  loadMore() {
    const loadMore = 3;
    this.postsLimit += loadMore;
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
