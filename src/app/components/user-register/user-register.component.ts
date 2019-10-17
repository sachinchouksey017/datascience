import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../../_service/user_service/user.service';
import { UtilityService } from '../../../_service/utility_service/utility.service';
const registerDetails = {
  userName: '',
  password: '',
  confirmpassword: '',
  emailId: '',
  contact: ''

};
@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  @Output() registerEvent = new EventEmitter<boolean>();

  hide = false;
  cHide = false;
  disableSubmit = false;
  loginForm: FormGroup;
  userName = new FormControl(registerDetails.userName, [Validators.required,
  Validators.email,
  Validators.pattern('^([a-zA-Z0-9][.-]?)+@([a-zA-Z0-9]+[.-]?)*[a-zA-Z0-9][.][a-zA-Z]{2,3}$')]);
  password = new FormControl(registerDetails.password, [Validators.required, Validators.minLength(6), this.noWhitespaceValidator]);
  confirmpassword = new FormControl(registerDetails.confirmpassword,
    [Validators.required, Validators.minLength(6), this.noWhitespaceValidator]);
  email = new FormControl(registerDetails.emailId, [Validators.required, Validators.email,
  Validators.pattern('^([a-zA-Z0-9][.-]?)+@([a-zA-Z0-9]+[.-]?)*[a-zA-Z0-9][.][a-zA-Z]{2,3}$')]);
  contact = new FormControl(registerDetails.contact, [Validators.required, Validators.minLength(3),
  Validators.pattern('[6-9]{1}[0-9]{9}')]);
  constructor(private router: Router, private userService: UserService, private utility: UtilityService) { }

  ngOnInit() {
  }
  getErrorMessageUserName() {
    return this.userName.hasError('required') ? 'User Name Is Required.' :
      this.userName.hasError('email') ? 'Enter Valid User Name.' :
        this.userName.hasError('pattern') ? 'Enter Valid User Name.' :

          '';
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'Email Is Required.' :
      this.email.hasError('email') ? 'Enter Valid Email.' :
        this.email.hasError('pattern') ? 'Enter Valid Email.' :

          '';
  }
  getErrorMessagePassword() {
    return this.password.hasError('required') ? 'Password Feild Is Required.' :
      this.password.hasError('whitespace') ? 'Not Valid Password' :
        this.password.hasError('minlength') ? 'Min Character For Password is 6' :

          '';
  }
  getErrorMessageConfirmPassword() {
    return this.confirmpassword.hasError('required') ? 'confirm Password Feild Is Required.' :
      this.confirmpassword.hasError('whitespace') ? 'Invalid confirm password' :
        this.confirmpassword.hasError('minlength') ? 'Min Character For Password is 6' :
          '';
  }
  getErrorMessagePhoneNumber() {
    return this.contact.hasError('required') ? 'contact Number Required' :
      this.contact.hasError('pattern') ? 'Invalid contact Number' :
        '';
  }
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
    this.registerEvent.emit(true);
  }
  forgotpassword() {
    this.router.navigate(['/forgotPassword']);
  }
}
