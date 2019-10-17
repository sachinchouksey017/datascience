import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = true;
  @Input() wholeHeader: boolean;
  constructor(private router: Router, public dialog: MatDialog) { }
  navigate(path: string = "") {
    this.router.navigate([path]);
  }
  ngOnInit() {
  }
  openLoginDialog() {
    const dialogRef = this.dialog.open(DialogComponent, {
      // width: '250px',
      data: { name: '', animal: '' },
      panelClass: 'loginDialog'
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // this.animal = result;
    });
  }

}
