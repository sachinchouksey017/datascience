import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.scss']
})
export class AdminPanelComponent implements OnInit {
  datasets= []
  constructor(
    // private sharedService: DatasetsharedServiceService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.data.subscribe(data => {
      console.log('data frm service ', data.datasets);
      this.datasets = data.datasets;
      // this.sharedService.changeMessage(this.datasets);
    })
    
  }

}
