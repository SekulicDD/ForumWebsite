import { Component, Input, OnInit } from '@angular/core';
import { Reply } from '../../data access/reply/reply.model';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  constructor() { }

  @Input() reply:Reply;

  ngOnInit(): void {
  }

}
