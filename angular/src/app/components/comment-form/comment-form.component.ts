import { Component, OnInit } from '@angular/core';
import {Profile} from '../../Profile';
import { PROFILE } from 'src/app/mock-profiles';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrls: ['./comment-form.component.css']
})
export class CommentFormComponent implements OnInit {

  profiles:Profile[]=PROFILE;

  constructor() { }

  ngOnInit(): void {
  }

}
