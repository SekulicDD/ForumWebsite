import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngxs/store';
import { Login } from 'src/app/shared/data access/auth/auth.action';
import { UserAuth } from "../../../shared/services/auth/auth.service";

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

// 1. Profile page
// 2. Create post, create comment ,reply to comment
// 3. Dovrsi LOGIN / REGISTER validaciju,uspesan ispis redirect etc

  loginForm: FormGroup;
  private userAuth:UserAuth;

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
    this.router.navigateByUrl('/user');
  }

}
