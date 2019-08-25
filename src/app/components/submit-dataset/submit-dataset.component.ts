import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import {ApiService } from "../../../_service/api.service"
@Component({
  selector: 'app-submit-dataset',
  templateUrl: './submit-dataset.component.html',
  styleUrls: ['./submit-dataset.component.scss']
})
export class SubmitDatasetComponent implements OnInit {
  submitForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private apiservice: ApiService) { }


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


  processSignUp(signupFormValues, formDirective) {
    console.log('values ', signupFormValues);
    const payload = {
      problem_name: signupFormValues.problem_name,
      algorithm_name: signupFormValues.model_acc,
      dataset_accuracy:90,
      code_url:signupFormValues.git_url,
      jupyter_url: signupFormValues.jupyter_url,
      dataset_file_type: signupFormValues.dataset_type,
      dataset_size: 50,
      dataset_url:signupFormValues.dataset_url,
      document_url:signupFormValues.dataset_url
    }
    this.apiservice.postService(payload).subscribe(response => {
      console.log('res' , response);

    })

  }
  ngOnInit() {
  this.createForm();
  }


}
