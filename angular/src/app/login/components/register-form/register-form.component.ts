import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngxs/store';
import { Register } from 'src/app/shared/data access/auth/auth.action';
import { UserAuth } from 'src/app/shared/services/auth/auth.service';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {

  registerForm:FormGroup;
  userAuth:UserAuth;

  get username(){
    return this.registerForm.get('username');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }
  get passwordConf(){
    return this.registerForm.get('passwordConf');
  }
  
  constructor(private fb:FormBuilder,private store:Store) { 
    this.registerForm = this.fb.group({});
  }
  
  ngOnInit(): void {
    this.registerForm=this.fb.group({
      username:['',[
        Validators.required
      ]],
      email:['',[
        Validators.required,
        Validators.email
      ]],
      password:['',[
        Validators.required,
      ]],
      passwordConf:['',[
        Validators.required
      ]], 
    },
    {validator:this.passwordMatch}
    );
  }

  passwordMatch=()=>{
    this.password?.value!=this.passwordConf?.value ? 
    this.passwordConf?.setErrors({passwordMissmatch:true}) : this.passwordConf?.setErrors(null); 
  }
 
  handleRegister(){
    this.userAuth={
      name:this.username?.value,
      password:this.password?.value,
      email:this.email?.value,
    }
    this.store.dispatch(new Register(this.userAuth));
  }

}
