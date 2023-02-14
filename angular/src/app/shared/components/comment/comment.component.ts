import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { DeleteReply } from '../../data access/reply/reply.action';
import { Reply } from '../../data access/reply/reply.model';
import { User } from '../../data access/user/user.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor(private store:Store) { }

  @Input() reply:Reply;
  @Input() authUser:User | null;

  ngOnInit(): void {
  }

  deleteComment(event: Event) {
    event.preventDefault();
    this.store.dispatch(new DeleteReply(this.reply.id));
  }

}
