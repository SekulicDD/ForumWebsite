import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './components/post-page/post-page.component';
import { DateAsAgoPipe } from '../shared/pipes/date-as-ago.pipe';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationTemplateComponent } from '../shared/components/pagination-template/pagination-template.component';
import { ThreadLineComponent } from './components/post-page/thread-line/thread-line.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { RouterModule } from '@angular/router';
import { SortByComponent } from './components/sort-by/sort-by.component';


@NgModule({
  declarations: [
    PostPageComponent,
    ThreadLineComponent,
    DateAsAgoPipe,
    PaginationTemplateComponent,
    CategoryMenuComponent,
    SortByComponent
  ],
  imports: [
    CommonModule,
    PostsRoutingModule,
    NgxPaginationModule,
    RouterModule
  ]
})
export class PostsModule { }
