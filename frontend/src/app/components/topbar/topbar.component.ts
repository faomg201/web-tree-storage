import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {

  userid: any
  token: any

  constructor(private router:Router, public local:LocalStorageService) { 
    this.userid = this.local.get('user').result.id
    this.token = this.local.get('user').token
  }

  ngOnInit(): void {
  }

  signout(){
    this.local.clear();
    this.router.navigate(['/login']);
  }

}
