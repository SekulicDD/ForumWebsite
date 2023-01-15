import {Category} from "./category.model";
import {Action, Selector, State, StateContext} from "@ngxs/store";
import {tap} from "rxjs";
import {Injectable} from "@angular/core";
import { GetCategories } from "./category.action";
import { CategoriesApiService } from "../../services/category/categories-api.service";



export class CategoriesStateModel {
  categories: Category[]=[];
}

@State<CategoriesStateModel>({
  name: 'categories',
  defaults: {
    categories: []
  },
})

@Injectable()
export class CategoriesState {
  constructor(private service:CategoriesApiService) {
  }

  @Selector()
  static getCategories(state: CategoriesStateModel){
    return state.categories;
  }

  @Action(GetCategories)
  get({getState,setState}:StateContext<CategoriesStateModel>){
    return this.service.getCategories().pipe(tap(returnData=>{
      const state = getState();
      setState({
        ...state,
        categories: returnData,
      });
    }))
  }
}
