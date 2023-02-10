import { NgModule } from '@angular/core';
import { PostDetailsRoutingModule } from './post-details-routing.module';
import { PostDetailsPageComponent } from './components/post-details-page/post-details-page.component';
import { PostDetailsComponent } from './components/post-details/post-details.component';
import { SharedModule } from '../shared/shared.module';
import { CommentFormComponent } from './components/comment-form/comment-form.component';



@NgModule({
  declarations: [
    PostDetailsPageComponent,PostDetailsComponent,CommentFormComponent
  ],
  imports: [
    PostDetailsRoutingModule,
    SharedModule
  ]
})
export class PostDetailsModule { }
