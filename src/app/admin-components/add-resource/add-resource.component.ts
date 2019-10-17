
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ValidationErrors, ValidatorFn, AbstractControl } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Router } from '@angular/router';
import { ResourcesComponent } from '../resources/resources.component';


@Component({
  selector: 'app-add-resource',
  templateUrl: './add-resource.component.html',
  styleUrls: ['./add-resource.component.scss']
})
export class AddResourceComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<ResourcesComponent>, private router: Router) {
  }
  ngOnInit() {

  }
  closeDialog(){
    this.dialogRef.close();
  }
}
