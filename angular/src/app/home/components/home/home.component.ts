import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetCategories } from 'src/app/shared/data access/category/category.action';
import { Category } from 'src/app/shared/data access/category/category.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  categories$:Observable<Category[]>;

  constructor(private store:Store) { 
    this.categories$ =store.select(state=>state.categories.categories);
  }

  ngOnInit(): void { 
    this.store.dispatch(new GetCategories());
  }

}
