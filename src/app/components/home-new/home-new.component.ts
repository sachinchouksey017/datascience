import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasetsharedServiceService } from '../../../_service/datasetshared-service.service';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { ShortbybottomSheetComponent } from '../shortbybottom-sheet/shortbybottom-sheet.component';
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
  sort: string;
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
    private sharedService: DatasetsharedServiceService, private _bottomSheet: MatBottomSheet) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }
  ngOnInit() {
    this.ActiveRoute.data.subscribe(data => {
      console.log('data frm service ', data.datasets);
      this.datasets = data.datasets;
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
    console.log('clci');
    
    this._bottomSheet.open(ShortbybottomSheetComponent);
  }
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
