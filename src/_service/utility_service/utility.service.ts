import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private _snackBar: MatSnackBar) { }
  openSnackBar(message: string, action: string = '', time: number = 2000) {
    this._snackBar.open(message, action, {
      duration: time,
    });
  }
}
