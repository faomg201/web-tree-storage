import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import { AdminSignupService } from '../../services/adminsignup.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.css']
})
export class AdminsignupComponent implements OnInit {

  Role: string[] = ['Admin','User'];
  Gender: string[] = ['Male','Female'];

  signupForm = new FormGroup({
    username: new FormControl('',[Validators.required,Validators.pattern('[a-z A-Z]+$')]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    role: new FormControl('',[Validators.required]),
    dt: new FormControl('',[Validators.required]),
  });

  previewLoaded: boolean = false;

  constructor(private sup: AdminSignupService, private router: Router) { }

  ngOnInit(): void {
  }

  signup(){
    console.log(this.signupForm.value);
    this.sup.signup(this.signupForm.value).subscribe(
      data => {
        if(!data){
          alert('Can not signup!');
        }else{
          alert('Signup successfuly!!Xd');
          this.back()
        }
      },
      err =>{
        console.log(err);
        alert('Can not signup!');
      }
    );
  }

  get email(){
    return this.signupForm.get('email') as FormArray;
  }

  get username(){
    return this.signupForm.get('username') as FormArray;
  }
  get password(){
    return this.signupForm.get('password') as FormArray;
  }

  back(){
    this.router.navigate(['/manage'])
  }


}
