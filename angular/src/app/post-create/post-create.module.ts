import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostCreateRoutingModule } from './post-create-routing.module';
import { CreatePostPageComponent } from './components/create-post-page/create-post-page.component';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    CreatePostPageComponent,
  ],
  imports: [
    CommonModule,
    PostCreateRoutingModule,
    QuillModule.forRoot()
  ]
})
export class PostCreateModule { }


