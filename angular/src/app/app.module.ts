import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { BtnHeaderComponent } from './components/btn-header/btn-header.component';
import { TopicComponent } from './components/topic/topic.component';
import { LineComponent } from './components/line/line.component';
import { FooterComponent } from './components/footer/footer.component';
import { PaginationComponent } from './components/pagination/pagination.component';
import { ThreadComponent } from './components/thread/thread.component';
import { ThreadLineComponent } from './components/thread-line/thread-line.component';
import { CommentComponent } from './components/comment/comment.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileCommentComponent } from './components/profile-comment/profile-comment.component';
import { AboutComponent } from './components/about/about.component';
import { CommentFormComponent } from './components/comment-form/comment-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BtnHeaderComponent,
    TopicComponent,
    LineComponent,
    FooterComponent,
    PaginationComponent,
    ThreadComponent,
    ThreadLineComponent,
    CommentComponent,
    ProfileComponent,
    ProfileCommentComponent,
    AboutComponent,
    CommentFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
