import { Component, OnInit } from '@angular/core';
import {Profile} from '../../Profile';
import { PROFILE } from 'src/app/mock-profiles';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  profiles:Profile[]=PROFILE;

  constructor() { }

  ngOnInit(): void {
  }

}
