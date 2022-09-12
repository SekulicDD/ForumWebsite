import { Component, OnInit } from '@angular/core';
import {Activity} from '../../Activity';
import { ACTIVITY } from 'src/app/mock-activities';

@Component({
  selector: 'app-profile-comment',
  templateUrl: './profile-comment.component.html',
  styleUrls: ['./profile-comment.component.css']
})
export class ProfileCommentComponent implements OnInit {
  activities:Activity[]=ACTIVITY;


  constructor() { }

  ngOnInit(): void {
  }

}
