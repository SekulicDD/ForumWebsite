import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Logout } from '../../data access/auth/auth.action';

@Component({
  selector: 'app-log-out-button',
  templateUrl: './log-out-button.component.html',
  styleUrls: ['./log-out-button.component.css']
})
export class LogOutButtonComponent implements OnInit {

  constructor(private store:Store) { }

  @Input() text:string;
  @Input() url:string;
  @Input() classes:string;

  logOut(){
    this.store.dispatch(Logout);
  }


  ngOnInit(): void {
  }

}
