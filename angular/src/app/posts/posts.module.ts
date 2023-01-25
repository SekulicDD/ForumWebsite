import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostsRoutingModule } from './posts-routing.module';
import { PostPageComponent } from './components/post-page/post-page.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { PaginationTemplateComponent } from '../shared/components/pagination-template/pagination-template.component';
import { ThreadLineComponent } from './components/post-page/thread-line/thread-line.component';
import { CategoryMenuComponent } from './components/category-menu/category-menu.component';
import { SortByComponent } from './components/sort-by/sort-by.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostPageComponent,
    ThreadLineComponent,
    PaginationTemplateComponent,
    CategoryMenuComponent,
    SortByComponent,
  ],
  imports: [
    PostsRoutingModule,
    NgxPaginationModule,
    SharedModule,
  ]
})
export class PostsModule { }
