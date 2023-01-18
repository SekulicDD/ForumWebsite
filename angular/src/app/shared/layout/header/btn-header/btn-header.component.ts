import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-btn-header',
  templateUrl: './btn-header.component.html',
  styleUrls: ['./btn-header.component.css']
})
export class BtnHeaderComponent implements OnInit {

  @Input() text:string;
  @Input() color:string;
  @Input()  fontcolor:string;
  @Input() classes:string;
  @Input() url:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
