import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AddFAQComponent } from '../add-faq/add-faq.component';
export interface DialogData {
  topic: string;
}

export interface PeriodicElement {
  endPoint: string;
  name: string;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { name: 'benqwldglc', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 1.0079, symbol: 'H' },
  { name: 'fugugdfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'abcd', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fjhbyjg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'jhbstydfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fug', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'benqwldglc', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 1.0079, symbol: 'H' },
  { name: 'fugugdfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'abcd', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fjhbyjg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'jhbstydfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fug', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'benqwldglc', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 1.0079, symbol: 'H' },
  { name: 'fugugdfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'abcd', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fjhbyjg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'jhbstydfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fug', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'benqwldglc', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 1.0079, symbol: 'H' },
  { name: 'fugugdfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'abcd', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fjhbyjg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'jhbstydfg', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' },
  { name: 'fug', endPoint: 'http://bridgelabzsite.herokuapp.com', weight: 4.0026, symbol: 'He' }


];
@Component({
  selector: 'app-interview-question',
  templateUrl: './interview-question.component.html',
  styleUrls: ['./interview-question.component.scss']
})
export class InterviewQuestionComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  displayedColumns = ['select', 'question', 'star'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);
  Search;
  ngOnInit() {
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
      this.selection.clear() :
      this.dataSource.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    // return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${i + 1}`;
  }
  lookUp() {

  }
  addResourceDialog(): void {
    const dialogRef = this.dialog.open(AddFAQComponent, {
      data: { topic: 'Add Interview Question' },
      disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
