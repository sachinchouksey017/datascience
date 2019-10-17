import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { UserService } from '../../../_service/user_service/user.service';
import { UtilityService } from '../../../_service/utility_service/utility.service';
@Component({
  selector: 'app-submit-dataset',
  templateUrl: './submit-dataset.component.html',
  styleUrls: ['./submit-dataset.component.scss']
})
export class SubmitDatasetComponent implements OnInit {
  timeSelect;
  submitForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private userservice: UserService, private utilityService: UtilityService) { }

  ngOnInit() {
    this.createForm();
  }
  createForm(): void {
    this.submitForm = this.formBuilder.group({
      problem_name: new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(100)]),
      max_accuracy: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      // email: new FormControl('', [Validators.email,Validators.required]),
      model_acc: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      dataset_type: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      git_url: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      jupyter_url: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),
      dataset_url: new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]),

    });
  }
  getErrorMessage(controlName: string, alias: string) {
    const control = this.submitForm.controls[controlName];

    if (control.errors) {
      if (control.errors.required) {
        return alias + ' is required';
      }
      if (control.errors.pattern) {
        return 'Invalid ' + alias.toLowerCase();
      }
      if (control.errors.minlength) {
        return alias + ' should have at least ' + control.errors.minlength.requiredLength + ' characters';
      }
      if (control.errors.maxlength) {
        return alias + ' should not have more than ' + control.errors.maxlength.requiredLength + ' characters';
      }
      if (control.errors.min) {
        return alias + ' should be greater than ' + control.errors.min.min;
      }
      if (control.errors.max) {
        return alias + ' can not be greater than ' + control.errors.max.max;
      }
    }
  }

  processSignUp(signupFormValues, formDirective) {
    if (this.submitForm.invalid) {
      this.markFormGroupTouched(this.submitForm);
    } else {
      const payload = {
        problem_name: signupFormValues.problem_name,
        algorithm_name: signupFormValues.model_acc,
        dataset_accuracy: 90,
        code_url: signupFormValues.git_url,
        jupyter_url: signupFormValues.jupyter_url,
        dataset_file_type: signupFormValues.dataset_type,
        dataset_size: 50,
        dataset_url: signupFormValues.dataset_url,
        document_url: signupFormValues.dataset_url
      };
      this.userservice.submitDatasets(payload).subscribe(data => {
        console.log('data', data);
        this.utilityService.openSnackBar('Dataset save successfully');
      }, err => {
        this.utilityService.openSnackBar('error');
      });
    }
  }
  /**
  * Marks all controls in a form group as touched
  * @param formGroup - The form group to touch
  */
  private markFormGroupTouched(formGroup: FormGroup) {
    (<any>Object).values(formGroup.controls).forEach(control => {
      control.markAsTouched();

      if (control.controls) {
        this.markFormGroupTouched(control);
      }
    });
  }
  fileTypeSelected(event: Event) {
    console.log(event);

  }
}
