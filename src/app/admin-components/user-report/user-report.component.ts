import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasetsharedServiceService } from '../../../_service/datasetshared-service.service';
@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  constructor(private router: Router, private ActiveRoute: ActivatedRoute,
    private sharedService: DatasetsharedServiceService) { }
    datasets = []
  ngOnInit() {
    this.ActiveRoute.data.subscribe(data => {
      console.log('data frm service ', data.datasets);
      this.datasets = data.datasets;
      // this.datasets = this.datasets.concat(this.datasets);
      // this.datasets = this.datasets.concat(this.datasets);

      this.sharedService.changeMessage(this.datasets);
    });

  }

}
