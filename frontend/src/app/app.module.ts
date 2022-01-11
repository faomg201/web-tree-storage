import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { TopbarComponent } from './components/topbar/topbar.component';
import { AdminloginComponent } from './components/adminlogin/adminlogin.component';
import { ManageComponent } from './components/manage/manage.component';
import { AdminsignupComponent } from './components/adminsignup/adminsignup.component';
import { BarpageComponent } from './components/barpage/barpage.component';
import { SecbarpageComponent } from './components/secbarpage/secbarpage.component';
import { AllproductComponent } from './components/product/allproduct/allproduct.component';
import { PerennialComponent } from './components/product/perennial/perennial.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomeComponent,
    HeaderComponent,
    TopbarComponent,
    AdminloginComponent,
    ManageComponent,
    AdminsignupComponent,
    BarpageComponent,
    SecbarpageComponent,
    AllproductComponent,
    PerennialComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
