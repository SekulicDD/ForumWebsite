import {Category} from "../models/Category";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {GetCategories} from "../actions/Category.action"
import {tap} from "rxjs";
import {Injectable} from "@angular/core";
import { CategoriesApiServiceService } from "../services/api/categories-api-service.service";

export class CategoryStateModel {
  categories: Category[]=[];
}

@State<CategoryStateModel>({
  name: 'categories',
  defaults: {
    categories: []
  },
})

@Injectable()
export class CategoryState {
  constructor(private service:CategoriesApiServiceService) {
  }

  @Selector()
  static getCategories(state: CategoryStateModel){
    return state.categories;
  }

  @Action(GetCategories)
  get({getState,setState}:StateContext<CategoryStateModel>){
    return this.service.getCategories().pipe(tap(returnData=>{
      const state = getState();
      setState({
        ...state,
        categories: returnData,
      });
    }))
  }
}
