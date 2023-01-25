import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import { LayoutModule } from './shared/layout/layout.module';
import { CategoriesState } from './shared/data access/category/categories.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsState } from './shared/data access/post/posts.state';
import { NgxPaginationModule } from 'ngx-pagination';
import { CommentComponent } from './shared/components/comment/comment.component';
import { RepliesState } from './shared/data access/reply/replies.state';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    LayoutModule,
    NgxPaginationModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FontAwesomeModule,
    AppRoutingModule,
    NgxsModule.forRoot([
      CategoriesState,
      PostsState,
      RepliesState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    NgxPaginationModule,
  ]
})



export class AppModule { }
