import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GetUserFriends } from 'src/app/shared/data access/friend/friends.action';
import { User } from 'src/app/shared/data access/user/user.model';

@Component({
  selector: 'app-friends-list',
  templateUrl: './friends-list.component.html',
  styleUrls: ['./friends-list.component.css']
})
export class FriendsListComponent implements OnInit {

  constructor(private store:Store) { }

  @Input() userId: number;

  friendsLimit:number = 6;
  friends$: Observable<User[]> = this.store.select(state => state.friends.friends);
  //meta$: Observable<Meta> = this.store.select(state => state.friends.friends);

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.store.dispatch(new GetUserFriends(this.userId,this.friendsLimit));
  }

}
