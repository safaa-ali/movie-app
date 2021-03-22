import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{
  loginForm: FormGroup;
  hidenPass: boolean = true;
  user: any[];
  constructor (
    private fb: FormBuilder,
    private router:Router,
    private _authService:AuthService
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{4,}[\W]{0,}$/)]]

    });
  }
ngOnInit(){

}

  createForm(form) {
    let email = form.value.email;
    let password = form.value.password;
    this._authService.SignIn(email, password)
    localStorage.setItem("user",JSON.stringify(form.value));
    // this.router.navigate(['home']);

    this.loginForm.reset()
  }
  // to hide and show password
  hidePass() {
    this.hidenPass = !this.hidenPass
  }

}
