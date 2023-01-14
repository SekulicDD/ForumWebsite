import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from 'src/app/shared/data access/category/category.model';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css'],

})
export class TopicComponent implements OnInit {
  
  @Input() categories$:Observable<Category[]>;

  notActive = new Set<number>();

  constructor() { }

  ngOnInit(): void {
  }

  toggleDropdown(id: number) {
    if(this.notActive.has(id)) 
      this.notActive.delete(id);
    else 
      this.notActive.add(id);
  }


}
