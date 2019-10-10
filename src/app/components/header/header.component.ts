import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActive = true;
  constructor(private router: Router) { }
  navigate(path: string = "") {
    this.router.navigate([path]);
  }
  ngOnInit() {
  }

}
