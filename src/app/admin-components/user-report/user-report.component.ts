import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { DatasetsharedServiceService } from '../../../_service/datasetshared-service.service';
import { AdminService } from '../../../_service/admin_service/admin.service';
@Component({
  selector: 'app-user-report',
  templateUrl: './user-report.component.html',
  styleUrls: ['./user-report.component.scss']
})
export class UserReportComponent implements OnInit {

  constructor(private router: Router, private ActiveRoute: ActivatedRoute,
    private adminService: AdminService) { }
  datasets = [];
  ngOnInit() {
    this.getuserDetail();
  }
  getuserDetail() {
    this.adminService.getUserDetails().subscribe(data => {
      console.log(data);
      this.datasets = data['data'];
    }, err => {
      console.log(err);
    });
  }
  showUserDatasets(userId) {
    this.router.navigate(['../../Datasets/' + userId]);
  }
}
