import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Category} from "../../models/Category";
import {api} from "../paths";

@Injectable({
  providedIn: 'root'
})
export class CategoriesApiServiceService {

  constructor(private http:HttpClient) { }

  getCategories(){
    const url=api.url+`/categories`;
    return this.http.get<Category[]>(url);
  }
}
