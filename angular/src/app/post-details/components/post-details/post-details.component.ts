import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {Comment} from 'src/app/Comment';
import { COMMENT } from 'src/app/mock-comments';
import { Post } from 'src/app/shared/data access/post/post.model';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  constructor() { }

  comments:Comment[]=COMMENT;
  @Input() post$:Observable<Post>;

  ngOnInit(): void {
  }

}
