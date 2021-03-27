import { Router } from '@angular/router';
import { AuthService } from './../service/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerationForm: FormGroup;
  hidenConfirm: boolean = true;
  hidenPass: boolean = true
  constructor (
    private fb: FormBuilder,
    private _authService: AuthService,
    private router:Router
  ) {

  }

  ngOnInit(): void {
    this.registerationForm = this.fb.group({
      fName: ['', [Validators.required, Validators.pattern("[a-z]{3,10}")]],
      lName: ['', [Validators.required, Validators.pattern("[a-z]{3,10}")]],
      email: ['', [Validators.required, Validators.pattern(/\w{1,}@[a-z]{3,}\.com/)]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])[A-z0-9]{4,}[\W]{0,}$/)]],
      confirmPass: ['', Validators.required]
    },
      {
        validator: this.match('password', 'confirmPass'),

      });
  }
  createForm(form) {

    let body = form.value
    this._authService.post('register', body)
    this.registerationForm.reset();
    this.router.navigate(['./home'])
  }
  // to confirm Password
  match(password, confirmPass) {
    return (registrationForm: FormGroup) => {
      let validPassword = registrationForm.controls[password];
      let validconfirmPass = registrationForm.controls[confirmPass];
      if (validPassword.value !== validconfirmPass.value) {
        validconfirmPass.setErrors({ match: true });
      } else {
        validconfirmPass.setErrors(null)
      }
    }
  }
  // to hide and show password
  hidePass() {
    this.hidenPass = !this.hidenPass
  }
  // to hide and show confirm password

  hideConfirmPass() {
    this.hidenConfirm = !this.hidenConfirm;

  }


}
