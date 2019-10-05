import { Component, OnInit, Inject } from '@angular/core';
import {MAT_BOTTOM_SHEET_DATA} from '@angular/material/bottom-sheet';

@Component({
  selector: 'app-bottom-sheet-dataset-description',
  templateUrl: './bottom-sheet-dataset-description.component.html',
  styleUrls: ['./bottom-sheet-dataset-description.component.scss']
})
export class BottomSheetDatasetDescriptionComponent implements OnInit {

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public selectedCardObject: any) {
    console.log(selectedCardObject,'data in bottom sheet');
    
   }

  ngOnInit() {
  }

}
