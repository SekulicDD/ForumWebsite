import { Component, OnInit } from '@angular/core';
import {Thread} from '../../Thread';
import {THREAD} from '../../mock-threads';

@Component({
  selector: 'app-thread',
  templateUrl: './thread.component.html',
  styleUrls: ['./thread.component.css']
})
export class ThreadComponent implements OnInit {

  threads:Thread[]=THREAD;

  constructor() { }

  ngOnInit(): void {
  }

}
