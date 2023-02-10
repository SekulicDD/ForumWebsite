import { Component, OnInit } from '@angular/core';
import { Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { AuthState } from '../../data access/auth/auth.state';
import { GetAuthUser } from '../../data access/user/user.action';
import { TokenService } from '../../services/auth/token.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private store:Store,private tokenService:TokenService) { }

  isAuth$: Observable<boolean> = this.store.select(AuthState.isAuthenticated);
  sub: Subscription;
  id: number;

  ngOnInit(): void {
    this.sub = this.isAuth$.subscribe(isAuth => {
      if (isAuth == true) {
        this.getAuthId();
        this.store.dispatch(new GetAuthUser(this.id, { includeImage: true, includeRole: true }));
      }
    })
  }

  getAuthId() {
    let token :string = this.store.selectSnapshot(state => state.auth.token);
    this.id=this.tokenService.getIdFromToken(token);
  }

  ngOnDestory():void {
    this.sub.unsubscribe();
  }

}
