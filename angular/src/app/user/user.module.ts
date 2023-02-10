import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserPageComponent } from './components/user-page/user-page.component';
import { ProfileComponent } from './components/profile/profile.component';
import { FriendsListComponent } from './components/friends-list/friends-list.component';
import { UserPostsComponent } from './components/user-posts/user-posts.component';
import { SharedModule } from '../shared/shared.module';
import { UserCommentsComponent } from './components/user-comments/user-comments.component';


@NgModule({
  declarations: [UserPageComponent,ProfileComponent, FriendsListComponent, UserPostsComponent, UserCommentsComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    SharedModule
  ]
})
export class UserModule { }
