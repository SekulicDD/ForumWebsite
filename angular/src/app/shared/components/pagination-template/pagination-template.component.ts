import { Component, Input, OnInit } from '@angular/core';
import { PaginationControlsComponent ,  PaginationControlsDirective} from 'ngx-pagination';

@Component({
  selector: 'app-pagination-template',
  templateUrl: './pagination-template.component.html',
  styleUrls: ['./pagination-template.component.css']
})
export class PaginationTemplateComponent extends PaginationControlsComponent {

  constructor() { super()}
  @Input('paginationData') p: PaginationControlsDirective;

  ngOnInit(): void {
  }

}
