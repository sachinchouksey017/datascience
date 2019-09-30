import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { BottomSheetDatasetDescriptionComponent } from '../bottom-sheet-dataset-description/bottom-sheet-dataset-description.component';
@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  selectedCard;
  selectedCardId;
  constructor(private _bottomSheet: MatBottomSheet) { }
  // myInnerHeight = 808;
  myInnerHeight = window.innerHeight - 176;
  ngOnInit() {
    if (window.innerHeight <= 672) {
      this.myInnerHeight = 529;
    } else if (window.innerHeight <= 723) {
      this.myInnerHeight = 628;
    } else if (window.innerHeight <= 938) {
      this.myInnerHeight = 628;
    }
    console.log(window.innerHeight, 'inner he', this.myInnerHeight);

  }


  showCardDescription(cardId) {
    if (window.innerWidth > 600) {
      this.selectedCard = true;
    } else {
      this._bottomSheet.open(BottomSheetDatasetDescriptionComponent);
    }

    this.selectedCardId = cardId;
  }

}
