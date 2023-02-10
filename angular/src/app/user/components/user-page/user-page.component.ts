import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Subscription } from 'rxjs';
import { AuthState } from 'src/app/shared/data access/auth/auth.state';
import { GetUserById } from 'src/app/shared/data access/user/user.action';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private store:Store,
    private route: ActivatedRoute,
    private router: Router) {
  }

  id:number;
  isAuth: boolean = this.store.selectSnapshot(AuthState.isAuthenticated);

  postsActive: boolean = true;
  commentsActive: boolean = false;
  friendsActive: boolean = false;

  sub: Subscription;

  ngOnInit(): void {
    this.getRouteId();
  }

  getRouteId():void{
    if (this.route.snapshot.paramMap.has('id')) {
      let tmp: string | null = this.route.snapshot.paramMap.get('id');
      if (tmp != null) {
        this.id = parseInt(tmp);
        this.store.dispatch(new GetUserById(this.id, { includeImage: true }));
      }
    }
    else
      this.redirectToProfile();
  }

  redirectToProfile():void{
    if (this.isAuth) {
      this.sub=this.store.select(state => state.user.authUser).subscribe(user => {
        if (user != null)
          this.router.navigateByUrl('user/'+user.id);
      });

    }
    else{
      this.router.navigateByUrl('login');
    }
  }

  setActiveTab(tabEmited:string) {
    switch (tabEmited) {
      case 'posts': this.postsActive = true;
        break;
      case 'comments': this.commentsActive = true;
        break;
      case 'friends': this.friendsActive = true;
    }
  }

  turnOffTabs() {
    this.postsActive = this.commentsActive = this.friendsActive = false;
  }

  handleTabEmit(event:any) {
    this.turnOffTabs();
    this.setActiveTab(event);
  }

  ngOnDestory(): void{
    this.sub.unsubscribe();
  }

}
