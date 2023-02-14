import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { CreateReply, UpdateReply } from 'src/app/shared/data access/reply/reply.action';
import { Reply } from 'src/app/shared/data access/reply/reply.model';
import { User } from 'src/app/shared/data access/user/user.model';


@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  constructor(private store: Store,private toast:ToastrService) { }
  
  @Input() postId: number;
  @Input() editReply: Reply | null;

  @Output() commentFormEmiter: EventEmitter<boolean> = new EventEmitter();

  hideComment() {
    this.commentFormEmiter.emit(false);
  }

  user$: Observable<User> = this.store.select(state => state.user.authUser);
  id: number;
  ngOnInit(): void {
    this.user$.subscribe(user => { if (user) this.id = user.id });
  }

  validateComment(text:string) {
    if (text.length < 10) {
      this.toast.error("Comment must be at least 10 char long", "Validation Error", {
        positionClass: "toast-bottom-right"
      });
      return false;
    }
    else if (text.length > 1000) {
      this.toast.error("Comment can't exceed 1000 charaters", "Validation Error", {
        positionClass: "toast-bottom-right"
      });
      return false;
    }
    return true;
  }

  postComment(text: string) {
    if(this.validateComment(text)) {
      this.store.dispatch(new CreateReply(this.postId, { text_content: text, user_id: this.id }));
      this.hideComment();
    }
  }

  editComment(text: string) {
    if (this.validateComment(text) && this.editReply != null) {
      this.editReply = { ...this.editReply, text_content: text,updated_at:new Date() };
      this.store.dispatch(new UpdateReply(this.editReply));
      this.hideComment();
    }
  }

}
