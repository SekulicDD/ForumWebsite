import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, tap } from 'rxjs';
import { CreateReply } from 'src/app/shared/data access/reply/reply.action';
import { User } from 'src/app/shared/data access/user/user.model';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private store: Store) { }
  
  @Input() postId: number;

  user$: Observable<User> = this.store.select(state => state.user.authUser);
  id: number;
  ngOnInit(): void {
    this.user$.subscribe(user => { if (user) this.id = user.id });
  }

  postComment(text: string) {
    this.store.dispatch(new CreateReply(this.postId, { text_content:text, user_id: this.id }));
  }

}
