import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './components/post-page/post-page.component';
import { ThreadComponent } from './components/thread/thread.component';
import { ThreadLineComponent } from './components/thread/thread-line/thread-line.component';
import { DateAsAgoPipe } from '../shared/pipes/date-as-ago.pipe';
import { PaginationComponent } from '../shared/components/pagination/pagination.component';


@NgModule({
  declarations: [
    PostPageComponent,
    ThreadComponent,
    ThreadLineComponent,
    DateAsAgoPipe,
    PaginationComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule
  ]
})
export class PostsModule { }
