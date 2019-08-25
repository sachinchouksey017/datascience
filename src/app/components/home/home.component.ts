import { Component, OnInit } from '@angular/core';
import {DatasetsharedServiceService} from "../../../_service/datasetshared-service.service";
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
datasets= []
  constructor(
    private sharedService: DatasetsharedServiceService,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log('data frm service ', data.datasets);
      this.datasets = data.datasets;
      this.sharedService.changeMessage(this.datasets);
    })

  }
}
