import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { AuthState } from 'src/app/shared/data access/auth/auth.state';
import { GetUserById } from 'src/app/shared/data access/user/user.action';
import { User, UserQueryParams } from 'src/app/shared/data access/user/user.model';
import { TokenService } from 'src/app/shared/services/auth/token.service';

@Component({
  selector: 'app-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnInit {

  constructor(private store:Store,
    private route: ActivatedRoute,
    private router: Router,
    private tokenService:TokenService) {
  }

  user$:Observable<User>=this.store.select(state=>state.user.user);
  id:number=0;
  isAuth: boolean = this.store.selectSnapshot(AuthState.isAuthenticated);
  

  
  ngOnInit(): void {
    this.getRouteId();
    this.store.dispatch(new GetUserById(this.id,{includeImage:true}));
  }

  getRouteId():void{
      if(this.route.snapshot.paramMap.has('id')){
        let tmp:string | null = this.route.snapshot.paramMap.get('id');
        if(tmp != null)
          this.id=parseInt(tmp);
      }
      else 
        this.redirectToProfile();
  }

  redirectToProfile():void{
    if(this.isAuth){
      let token :string = this.store.selectSnapshot(state => state.auth.token);
      this.id=this.tokenService.getIdFromToken(token);
      this.router.navigateByUrl('user/'+this.id);
    }
    else{
      this.router.navigateByUrl('login');
    }
  }



}
