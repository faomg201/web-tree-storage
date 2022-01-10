import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  constructor(private router:Router, public local:LocalStorageService) { }

  ngOnInit(): void {
  }

  signout(){
    this.local.clear();
    this.router.navigate(['/login']);
  }

}
