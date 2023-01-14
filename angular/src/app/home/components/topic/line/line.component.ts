import { Component, Input, OnInit } from '@angular/core';
import { SubCategory } from 'src/app/shared/data access/category/category.model';

@Component({
  selector: 'app-line',
  templateUrl: './line.component.html',
  styleUrls: ['./line.component.css']
})
export class LineComponent implements OnInit {

  constructor() { }
  @Input() sub_categories:SubCategory[];
  ngOnInit(): void {
  }

}
