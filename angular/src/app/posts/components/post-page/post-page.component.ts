import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription} from 'rxjs';
import { GetPostsByCategory } from 'src/app/shared/data access/post/post.action';
import { Post, PostsOrderBy, PostsQueryParams } from 'src/app/shared/data access/post/post.model';
import { ActivatedRoute } from '@angular/router';
import { Direction } from 'src/app/shared/data access/sortable.interface';

@Component({
  selector: 'app-post-page',
  templateUrl: './post-page.component.html',
  styleUrls: ['./post-page.component.css']
})
export class PostPageComponent implements OnInit {

  //  search

  posts$:Observable<Post[]>;
  meta$:Observable<Meta>;

  params:PostsQueryParams={
    latestReply:true,
    user:true,
    page:1,
    limit:5,
    order_by:PostsOrderBy.Date,
    direction:Direction.Descending,
  };

  total:number;
  private categoryId:number;
  private metaSub: Subscription;
  private catSub:Subscription;

  constructor(private store:Store,private route: ActivatedRoute) { 
    this.posts$=this.store.select(state=>state.posts.posts);
    this.meta$=this.store.select(state=>state.posts.meta);
  }

  getPage(page:number):void
  {
    this.params.page=page;
    this.store.dispatch(new GetPostsByCategory(this.categoryId,this.params));
    this.metaSub=this.meta$.subscribe(meta=>this.total=meta.total);
  }

  orderChange(order:PostsOrderBy){
    this.params.order_by=order;
    this.getPage(1);
  }

  directionChange(direction:Direction){
    this.params.direction=direction;
    this.getPage(1);
  }

  ngOnInit(): void {
    let id;
    this.catSub=this.route.paramMap.subscribe(params=>{
      id=params.get("catId");
      if(id==null)
        id='1';
      if(parseInt(id)!=this.categoryId){
        this.categoryId= parseInt(id);
        this.getPage(1);
      }
    });
  }

  ngOnDestroy() {
    this.metaSub.unsubscribe();
    this.catSub.unsubscribe();
  }

}
