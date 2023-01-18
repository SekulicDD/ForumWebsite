import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/shared/data access/post/post.model';

@Component({
  selector: 'app-thread-line',
  templateUrl: './thread-line.component.html',
  styleUrls: ['./thread-line.component.css']
})
export class ThreadLineComponent implements OnInit {

  @Input() post: Post;

  constructor() { }

  ngOnInit(): void {
  }

}
