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
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
