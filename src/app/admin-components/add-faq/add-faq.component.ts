
import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { FaqComponent } from '../faq/faq.component';
import { DialogData } from '../interview-question/interview-question.component';


@Component({
  selector: 'app-add-faq',
  templateUrl: './add-faq.component.html',
  styleUrls: ['./add-faq.component.scss']
})
export class AddFAQComponent implements OnInit {
  text = 'Add FAQ';

  constructor(public dialogRef: MatDialogRef<FaqComponent>, private router: Router, @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.text = data.topic;
  }
  ngOnInit() {

  }
  closeDialog() {
    this.dialogRef.close();
  }

}
