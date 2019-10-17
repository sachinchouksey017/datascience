import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../_service/user_service/user.service';
import { UtilityService } from '../../../_service/utility_service/utility.service';
const loginDetails = {
  emailId: '',
  password: '',
};


@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.scss']
})
export class UserLoginComponent implements OnInit {
  @Output() loginEvent = new EventEmitter<boolean>();

  hide = false;
  disableSubmit = false;
  loginForm: FormGroup;
  userName = new FormControl(loginDetails.emailId, [Validators.required,
  Validators.email,
  Validators.pattern('^([a-zA-Z0-9][.-]?)+@([a-zA-Z0-9]+[.-]?)*[a-zA-Z0-9][.][a-zA-Z]{2,3}$')]);
  password = new FormControl(loginDetails.password, [Validators.required, Validators.minLength(5), this.noWhitespaceValidator]);
  constructor(private router: Router, private userService: UserService, private utility: UtilityService) { }

  ngOnInit() {
  }
  getErrorMessageEmail() {
    return this.userName.hasError('required') ? 'User Name Is Required.' :
      this.userName.hasError('email') ? 'Enter Valid User Name.' :
        this.userName.hasError('pattern') ? 'Enter Valid User Name.' :

          '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password Feild Is Required.' :
      this.password.hasError('whitespace') ? 'Not Valid Password' :
        this.password.hasError('minlength') ? 'Min Character For Password is 6' :

          '';
  }
  // getErrorMessageConfrimPassword() {
  //   return this.password.hasError('required') ? 'Password Feild Is Required.' :
  //     this.password.hasError('minlength') ? 'Min Character For Password is 5' :
  //     this.password.ha
  //       '';
  // }
  public noWhitespaceValidator(control: FormControl) {
    const isWhitespace = (control.value || '').trim().length === 0;
    const isValid = !isWhitespace;
    return isValid ? null : { 'whitespace': true };
  }
  login() {
    if (this.userName.invalid || this.password.invalid) {
      this.userName.markAsTouched();
      this.password.markAsTouched();
    } else {
      this.userService.loginCommon({ email: this.userName.value, password: this.password.value }).subscribe(data => {
        this.utility.openSnackBar('login successFull');
        console.log(data);
        if (data['isAdmin']) {
          this.router.navigate(['adminpanel']);
        } else {
          this.router.navigate(['dashboard']);
        }

      }, err => {
        this.utility.openSnackBar('login unsuccessFull');
        this.router.navigate(['dashboard']);

      });
    }
  }
  register() {
    this.loginEvent.emit(false);
  }
  forgotpassword() {
    this.router.navigate(['/forgotPassword']);
  }
}
