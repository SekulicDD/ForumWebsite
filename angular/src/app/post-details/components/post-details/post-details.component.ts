import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Post } from 'src/app/shared/data access/post/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }
  @Output() commentFormEmiter: EventEmitter<boolean> = new EventEmitter();

  showCommentForm() {
    this.commentFormEmiter.emit(true);
  }

  @Input() post$:Observable<Post>;

  ngOnInit(): void {
  }

}
