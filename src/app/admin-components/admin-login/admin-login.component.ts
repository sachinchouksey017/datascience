import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

const loginDetails = {
  emailId: '',
  password: '',
};

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.scss']
})
export class AdminLoginComponent implements OnInit {

  hide = false;
  disableSubmit = false;
  loginForm: FormGroup;
  email = new FormControl(loginDetails.emailId, [Validators.required,
  Validators.email,
  Validators.pattern('^([a-zA-Z0-9][.-]?)+@([a-zA-Z0-9]+[.-]?)*[a-zA-Z0-9][.][a-zA-Z]{2,3}$')]);
  password = new FormControl(loginDetails.password, [Validators.required, Validators.minLength(5), this.noWhitespaceValidator]);
  constructor(private router: Router) { }

  ngOnInit() {
  }
  getErrorMessageEmail() {
    return this.email.hasError('required') ? 'EmailId Is Required.' :
      this.email.hasError('email') ? 'Enter Valid EmailId.' :
        this.email.hasError('pattern') ? 'Enter Valid EmailId.' :

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
    this.password.markAsTouched;
    // if (!this.password.hasError('minlength') && !this.email.hasError('email')) {
    //   console.log(this.password);

    //   this.disableSubmit = true;
    //   const loginDetails = new Login();
    //   loginDetails.emailId = this.email.value;
    //   loginDetails.password = this.password.value;
    //   let OBJ = {
    //     'user': {
    //       'email': loginDetails.emailId,
    //       'password': loginDetails.password
    //     }
    //   };

    //   console.log(OBJ);

      // this.usersevice.login(OBJ).subscribe(response => {
      //   console.log(response + JSON.stringify(response));
      //   localStorage.setItem('token', String((response as any).token));
      //   localStorage.setItem('emailId', String((response as any).email));
      //   this.router.navigateByUrl('/projects');
      //   this.spinnerService.hide();
      // },
      //   (error) => {
      //     this.disableSubmit = false;
      //     console.log(error.error.code);
      //     console.log(error.error.message);

      //     this.spinnerService.hide();

      //     this.utilityService.showToast(ToastType.ERROR, error.error.message);
      //   }

      // );

    // }
  }
  register() {
    this.router.navigate(['/register']);
  }
  forgotpassword() {
    this.router.navigate(['/forgotPassword']);
  }
}
