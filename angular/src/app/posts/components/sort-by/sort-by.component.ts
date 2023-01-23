import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PostsOrderBy } from 'src/app/shared/data access/post/post.model';
import { Direction } from 'src/app/shared/data access/sortable.interface';

@Component({
  selector: 'app-sort-by',
  templateUrl: './sort-by.component.html',
  styleUrls: ['./sort-by.component.css']
})
export class SortByComponent implements OnInit {

  constructor() { }
  title:PostsOrderBy=PostsOrderBy.Title;
  date:PostsOrderBy=PostsOrderBy.Date;
  comments:PostsOrderBy=PostsOrderBy.ReplyCount;
  latestComment:PostsOrderBy=PostsOrderBy.LatestReply;
  asc:Direction=Direction.Ascending;
  desc:Direction=Direction.Descending;

  direction:string=this.desc;
  order:string= this.date;

  @Output() emmitSortOrder = new EventEmitter<PostsOrderBy>();
  @Output() emmitDirectionOrder = new EventEmitter<Direction>();

  emmitOrder(event:any){
    this.emmitSortOrder.emit(event);
    this.order=event;
  }

  emmitDirection(event:any){
    this.emmitDirectionOrder.emit(event);
    this.direction=event;
  }

  ngOnInit(): void {
  }

}
