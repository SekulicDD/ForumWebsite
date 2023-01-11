import { Component, Input, OnInit } from '@angular/core';
import {Title} from '../../../../Title';


@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() { }
  @Input() title:Title;
  ngOnInit(): void {
  }

}
