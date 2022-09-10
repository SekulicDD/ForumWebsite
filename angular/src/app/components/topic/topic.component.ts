import { Component, OnInit, Input } from '@angular/core';
import {Title} from '../../Title';
import {TITLE} from '../../mock-titles';


@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  
  titles:Title[]=TITLE;

  @Input() classes:string;

  constructor() { }

  ngOnInit(): void {
  }

}
