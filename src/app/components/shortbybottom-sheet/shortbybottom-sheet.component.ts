import { Component, OnInit } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';
@Component({
  selector: 'app-shortbybottom-sheet',
  templateUrl: './shortbybottom-sheet.component.html',
  styleUrls: ['./shortbybottom-sheet.component.scss']
})
export class ShortbybottomSheetComponent implements OnInit {

  constructor(private _bottomSheetRef: MatBottomSheetRef<ShortbybottomSheetComponent>) { }
  selectedImageUrl = 'https://rukminim1.flixcart.com/www/16/16/promos/16/11/2018/daee1dbb-6ee1-4f64-8bf7-72f1fa48c68f.png?q=90';
  notSelectedImageUrl = 'https://rukminim1.flixcart.com/www/16/16/promos/16/11/2018/2d824eca-d95d-4dd4-bd0d-1cdd02f651ff.png?q=90';
  selectedValue = localStorage.getItem('sortBy');
  ngOnInit() {
  }
  selectSortName(value) {
    localStorage.setItem('sortBy', value);
    this.selectedValue = value;
    this._bottomSheetRef.dismiss();
  }
}
