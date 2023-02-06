import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/data access/post/post.model';
import { User } from 'src/app/shared/data access/user/user.model';

@Component({
  selector: 'app-thread-line',
  templateUrl: './thread-line.component.html',
  styleUrls: ['./thread-line.component.css']
})
export class ThreadLineComponent implements OnInit {

  @Input() post: Post;
  @Input() user: User;

  constructor() { }

  ngOnInit(): void {
  }

}
