import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasetsharedServiceService } from '../../../_service/datasetshared-service.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ShortbybottomSheetComponent } from '../shortbybottom-sheet/shortbybottom-sheet.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-home-new',
  templateUrl: './home-new.component.html',
  styleUrls: ['./home-new.component.scss']
})
export class HomeNewComponent implements OnDestroy, OnInit {
  mobileQuery: MediaQueryList;
  isActive = true;
  datasets = []
  sort = 'Popularity';
  selectedValue: string;
  foods: Food[] = [
    { value: 'Relevance', viewValue: 'Relevance' },
    { value: 'Popularity', viewValue: 'Popularity' },
    { value: 'Accuracy: Low to High', viewValue: 'Accuracy: Low to High' },
    { value: 'Accuracy: High to Low', viewValue: 'Accuracy: High to Low' },
    { value: 'Newest First', viewValue: 'Newest First' }

  ];
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private ActiveRoute: ActivatedRoute,
    private sharedService: DatasetsharedServiceService, private _bottomSheet: MatBottomSheet, public dialog: MatDialog) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.ActiveRoute.data.subscribe(data => {
      console.log('data frm service ', data.datasets);
      this.datasets = data.datasets;
      this.datasets = this.datasets.concat(this.datasets)
      this.sharedService.changeMessage(this.datasets);
    })

  }
  sortBy(value) {
    this.sort = value;
  }
  navigate(path: string = "") {
    this.router.navigate([path]);
  }
  openBottomSheet(): void {
    this._bottomSheet.open(ShortbybottomSheetComponent);
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      // width: '250px',
      data: { name: '', animal: '' },
      panelClass: 'loginDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
