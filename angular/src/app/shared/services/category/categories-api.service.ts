import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { api } from 'src/app/shared/path';
import { map } from 'rxjs';
import { Category, CategoryResponse } from '../../data access/category/category.model';


@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http:HttpClient) { }

  getCategories(){
    const url=api.url+`/categories`;
    return this.http.get<CategoryResponse>(url)
    .pipe(
      map(response => {
          const categories = response.data.data as Category[];
          const meta = response.data.meta as Meta;
          const links = response.data.links as object;
          return categories;
        })
    );
  }
  
}
