import "../meta.model";

export interface Category {
  id: number;
  name: string;
  sub_categories:SubCategory[];
}

export interface SubCategory{
  id: number;
  name: string;
  posts_count:number;
}
  
export interface CategoryResponse {
  data: {
      data: Category[],
      links: object,
      meta: Meta
  }
}