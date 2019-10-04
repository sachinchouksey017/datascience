import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetDatasetDescriptionComponent } from '../bottom-sheet-dataset-description/bottom-sheet-dataset-description.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  selectedCard;
  selectedCardId;
  selectedForm: FormGroup;
  userId: number;
  constructor(private formBuilder: FormBuilder, private _bottomSheet: MatBottomSheet, private router: Router,
    private activedRoute: ActivatedRoute) { }
  // myInnerHeight = 808;
  myInnerHeight = window.innerHeight - 176;
  ngOnInit() {
    console.log(this.activedRoute.snapshot.params.userId);
    this.userId = this.activedRoute.snapshot.params.userId;
    if (window.innerHeight <= 672) {
      this.myInnerHeight = 529;
    } else if (window.innerHeight <= 723) {
      this.myInnerHeight = 628;
    } else if (window.innerHeight <= 938) {
      this.myInnerHeight = 628;
    }
    console.log(window.innerHeight, 'inner he', this.myInnerHeight);

  }
  createForm(): void {
    this.selectedForm = this.formBuilder.group({
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

  showCardDescription(cardId) {
    if (window.innerWidth > 600) {
      this.selectedCard = true;
    } else {
      this._bottomSheet.open(BottomSheetDatasetDescriptionComponent);
    }

    this.selectedCardId = cardId;
  }
  navigate(path: string = '') {
    this.router.navigate([path]);
  }
  getDatasetOfUser() {

  }
}
