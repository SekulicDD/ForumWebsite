import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { map, Observable, tap } from 'rxjs';
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

  //DODATI PAGINACIJU

  posts$:Observable<Post[]>;
  params:PostsQueryParams={
    latestReply:true,
    user:true,
    page:1,
    limit:6,
    order_by:PostsOrderBy.Title,
    direction:Direction.Ascending,
  };

  constructor(private store:Store,private route: ActivatedRoute) { 
    this.posts$=this.store.select(state=>state.posts.posts);
  }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('catId');
    if(id!=null)
      this.store.dispatch(new GetPostsByCategory(parseInt(id),this.params));

  }

}
