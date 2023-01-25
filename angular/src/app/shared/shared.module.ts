import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAsAgoPipe } from './pipes/date-as-ago.pipe';
import { CommentComponent } from './components/comment/comment.component';

@NgModule({
  declarations: [
    DateAsAgoPipe,
    CommentComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports:[
    DateAsAgoPipe,
    CommentComponent,
    CommonModule,
  ]

})
export class SharedModule { }
