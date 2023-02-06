import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from "@ngxs/devtools-plugin";
import { LayoutModule } from './shared/layout/layout.module';
import { CategoriesState } from './shared/data access/category/categories.state';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PostsState } from './shared/data access/post/posts.state';
import { NgxPaginationModule } from 'ngx-pagination';
import { RepliesState } from './shared/data access/reply/replies.state';
import { AuthState } from './shared/data access/auth/auth.state';
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { AuthInterceptor } from './shared/auth.interceptor';
import { UserPageComponent } from './user/components/user-page/user-page.component';
import { UserState } from './shared/data access/user/user.state';
import { FriendsState } from './shared/data access/friend/friends.state';

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
      RepliesState,
      AuthState,
      UserState,
      FriendsState
    ]),
    NgxsStoragePluginModule.forRoot({
      key: 'auth.token'
    }),
    NgxsReduxDevtoolsPluginModule.forRoot(),

  
  ],
  providers: [
    {
      provide:HTTP_INTERCEPTORS,
      useClass:AuthInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent],
  exports: [
    NgxPaginationModule,
  ]
})



export class AppModule { }
