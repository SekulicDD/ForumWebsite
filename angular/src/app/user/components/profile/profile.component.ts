import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/shared/data access/user/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private store: Store) { }
  
  @Input() user$:Observable<User>=this.store.select(state=>state.user.user);
  @Output() activeTabEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  emitActiveTab(value: string) {
    this.activeTabEvent.emit(value);
  }


}
