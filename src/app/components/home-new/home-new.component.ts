import { Component, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { ChangeDetectorRef, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasetsharedServiceService } from '../../../_service/datasetshared-service.service';

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
  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private router: Router, private ActiveRoute: ActivatedRoute,
    private sharedService: DatasetsharedServiceService) {
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
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

}
