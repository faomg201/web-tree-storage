import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';

const routes: Routes = [
  {path: 'signup', component: SignupComponent },
  {path: 'login', component: LoginComponent},
  {path: 'home', component: HomeComponent},
  {path: 'header', component: HeaderComponent},
  {path: 'adminlogin', component: AdminloginComponent},
  {path: 'manage', component: ManageComponent},
  {path: 'adminsignup', component: AdminsignupComponent},
  {path:'',
  redirectTo: 'login',
  pathMatch: 'full'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
