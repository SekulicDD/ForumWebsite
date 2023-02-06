import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { GetRepliesByUserId } from 'src/app/shared/data access/reply/reply.action';
import { Reply } from 'src/app/shared/data access/reply/reply.model';

@Component({
  selector: 'app-user-comments',
  templateUrl: './user-comments.component.html',
  styleUrls: ['./user-comments.component.css']
})
export class UserCommentsComponent implements OnInit {

  constructor(private store:Store) { }

  @Input() userId:number;
  comments$: Observable<Reply[]> = this.store.select(state => state.replies.userReplies);
  commentsMeta$:Observable<Meta>= this.store.select(state => state.replies.userRepliesMeta);
  commentsLimit:number = 6;
  commentsTotal: number;

  sub: Subscription;

 
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.store.dispatch(new GetRepliesByUserId(this.userId, this.commentsLimit));
    this.sub=this.commentsMeta$.subscribe(
      meta => {
        if (meta)
          this.commentsTotal = meta.total;
      }
    );
  }

  loadMoreComments() {
    const loadMore = 3;
    this.commentsLimit += loadMore;
    this.getData();
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
