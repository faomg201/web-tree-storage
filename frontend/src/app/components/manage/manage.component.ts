import { Component, OnInit } from '@angular/core';
import { LocalStorageService } from 'angular-web-storage'
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  
 user: any; 
 userid: any;
 token: any;
 
  constructor( private local: LocalStorageService, private ud: UserService,private router: Router) { 
    this.onLoading();
    
  }

  ngOnInit(): void {}
  onLoading(){
    try {
      this.token = this.local.get('user').token
      this.ud.getUser(this.token).subscribe(
        data => {
          this.user = data;
        },err => {
          console.log(err)
        });
    }catch (error){
      console.log(error)
    }
  }

}
