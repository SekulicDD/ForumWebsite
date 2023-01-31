import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DateAsAgoPipe } from './pipes/date-as-ago.pipe';
import { CommentComponent } from './components/comment/comment.component';
import { LogOutButtonComponent } from './components/log-out-button/log-out-button.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    DateAsAgoPipe,
    CommentComponent,
    LogOutButtonComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    DateAsAgoPipe,
    CommentComponent,
    CommonModule,
    LogOutButtonComponent
  ]

})
export class SharedModule { }
