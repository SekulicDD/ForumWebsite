import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  @Input() authUser: User | null;
  
  @Output() commentFormEmitter: EventEmitter<boolean> = new EventEmitter();
  @Output() editReply: EventEmitter<Reply> = new EventEmitter();

  ngOnInit(): void {
  }

  deleteComment(event: Event) {
    event.preventDefault();
    this.store.dispatch(new DeleteReply(this.reply.id));
  }

  editComment(event:Event) {
    event.preventDefault();
    this.commentFormEmitter.emit(true);
    this.editReply.emit(this.reply);
  }

}
