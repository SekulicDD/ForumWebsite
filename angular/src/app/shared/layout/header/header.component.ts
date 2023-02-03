import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from '../../data access/auth/auth.state';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store) { }

  isAuth$ :Observable<boolean> = this.store.select(AuthState.isAuthenticated);

  ngOnInit(): void {
  }


}
