import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Login } from 'src/app/shared/data access/auth/auth.action';
import { AuthState } from 'src/app/shared/data access/auth/auth.state';
import { User } from 'src/app/shared/data access/user/user.model';
import { UserAuth } from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

// 1. Login functionality
// 2. Profile page
// 3. Create post, create comment ,reply to comment

  loginForm: FormGroup;
  private userAuth:UserAuth;

  @Select(AuthState.user) user$:Observable<User>;

  constructor(private store:Store,private fb:FormBuilder,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.fb.group({
      email:['',[
        Validators.required,
        Validators.email
      ]],
      password:['',[
        Validators.required,
        //Validators.pattern()
      ]]
    })
  }

  get email(){
    return this.loginForm.get('email');
  }

  get password(){
    return this.loginForm.get('password');
  }

  submitHandler(){
    this.userAuth={
      email:this.email?.value,
      password:this.password?.value
    }
    this.store.dispatch(new Login(this.userAuth));

    this.user$.subscribe(user=>{
      this.router.navigateByUrl("/user/"+user.id);
    }); 
  }

}
