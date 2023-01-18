import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetCategories } from 'src/app/shared/data access/category/category.action';
import { Category } from 'src/app/shared/data access/category/category.model';

@Component({
  selector: 'app-category-menu',
  templateUrl: './category-menu.component.html',
  styleUrls: ['./category-menu.component.css']
})
export class CategoryMenuComponent implements OnInit {

  constructor(private store:Store ) {
    this.categories$=this.store.select(state=>state.categories.categories);
  }

  categories$:Observable<Category[]>;

  ngOnInit(): void {
    this.store.dispatch(GetCategories);
  }

}
