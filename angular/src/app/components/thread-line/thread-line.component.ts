import { Component, OnInit, Input } from '@angular/core';
import {Thread} from '../../Thread';


@Component({
  selector: 'app-thread-line',
  templateUrl: './thread-line.component.html',
  styleUrls: ['./thread-line.component.css']
})
export class ThreadLineComponent implements OnInit {

  @Input() thread: Thread

  constructor() { }

  ngOnInit(): void {
  }

}
