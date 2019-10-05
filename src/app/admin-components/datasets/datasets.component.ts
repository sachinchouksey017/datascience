import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetDatasetDescriptionComponent } from '../bottom-sheet-dataset-description/bottom-sheet-dataset-description.component';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../../_service/admin_service/admin.service';
import { UtilityService } from '../../../_service/utility_service/utility.service';
@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  selectedCard;
  selectedCardId;
  selectedCardObject;
  showingCardType = 'pending';
  selectedForm: FormGroup;
  userId: number;
  selectedCardIndex: number;
  userDatasets = [];
  constructor(private formBuilder: FormBuilder, private _bottomSheet: MatBottomSheet, private router: Router,
    private activedRoute: ActivatedRoute, private adminService: AdminService, private utility: UtilityService) { }
  // myInnerHeight = 808;
  myInnerHeight = window.innerHeight - 176;
  ngOnInit() {
    this.userId = this.activedRoute.snapshot.params.userId;
    if (window.innerHeight <= 672) {
      this.myInnerHeight = 529;
    } else if (window.innerHeight <= 723) {
      this.myInnerHeight = 628;
    } else if (window.innerHeight <= 938) {
      this.myInnerHeight = 628;
    }
    this.getDatasetOfUser();
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

  showCardDescription(cardObject, index) {
    this.selectedCardObject = cardObject;
    this.selectedCardIndex = index;
    if (window.innerWidth > 600) {
      this.selectedCard = true;
    } else {
      this._bottomSheet.open(BottomSheetDatasetDescriptionComponent,{
        data: cardObject,
      });
    }
    this.selectedCardId = cardObject.id;
  }
  navigate(path: string = '') {
    this.router.navigate([path]);
  }
  getDatasetOfUser() {
    this.adminService.getUserDatasets(this.userId).subscribe(data => {
      console.log('particular user datasets', data);
      this.userDatasets = data['data'];
    }, err => {

    });
  }
  gotoPreviousCard() {
    if (this.selectedCardIndex > 0) {
      this.selectedCardObject = this.userDatasets[this.selectedCardIndex - 1];
      this.selectedCardId = this.selectedCardObject.id;
      this.selectedCardIndex--;
    }
  }
  gotoNextCard() {
    if (this.selectedCardIndex < this.userDatasets.length - 1) {
      this.selectedCardObject = this.userDatasets[this.selectedCardIndex + 1];
      this.selectedCardId = this.selectedCardObject.id;
      this.selectedCardIndex++;
    }
  }
  approveDataset(datasetId) {
    this.adminService.approveRejectDataset(datasetId + '/2').subscribe(data => {
      console.log('data after aproved', data);
      if (this.selectedCardIndex > -1) {
        this.userDatasets.splice(this.selectedCardIndex, 1);
      }
      this.selectedCard = false;
      this.utility.openSnackBar('dataset approved');
    });
  }
  pendingDataset() {
    this.selectedCard = false;
  }
  rejectDataset(datasetId) {
    this.adminService.approveRejectDataset(datasetId + '/1').subscribe(data => {
      console.log('data after reject', data);
      if (this.selectedCardIndex > -1) {
        this.userDatasets.splice(this.selectedCardIndex, 1);
      }
      this.selectedCard = false;
      this.utility.openSnackBar('dataset rejected');
    });
  }
  getCard(type) {
    this.showingCardType = type;
  }
}
