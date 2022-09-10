import { Component, OnInit } from '@angular/core';
import {Comment} from '../../Comment';
import { COMMENT } from 'src/app/mock-comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {

  comments:Comment[]=COMMENT;


  constructor() { }

  ngOnInit(): void {
  }

}
