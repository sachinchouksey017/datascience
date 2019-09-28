import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datasets',
  templateUrl: './datasets.component.html',
  styleUrls: ['./datasets.component.scss']
})
export class DatasetsComponent implements OnInit {
  selectedCard;
  selectedCardId;
  constructor() { }
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
    this.selectedCard = true;
    this.selectedCardId = cardId;
  }

}
