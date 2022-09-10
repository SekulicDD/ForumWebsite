import { Component, OnInit, Input } from '@angular/core';
import {Title} from '../../Title';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  @Input() title: Title;

  constructor() { }

  ngOnInit(): void {
  }

}
