import { Component, OnInit } from '@angular/core';
import {Profile} from '../../Profile';
import { PROFILE } from 'src/app/mock-profiles';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  profiles:Profile[]=PROFILE;

  constructor() { }

  ngOnInit(): void {
  }

}
