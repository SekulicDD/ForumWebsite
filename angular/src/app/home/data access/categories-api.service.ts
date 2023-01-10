import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "./category.model";
import { api } from 'src/app/shared/path';


@Injectable({
  providedIn: 'root'
})
export class CategoriesApiService {

  constructor(private http:HttpClient) { }

  getCategories(){
    const url=api.url+`/categories`;
    return this.http.get<Category[]>(url);
  }
}
