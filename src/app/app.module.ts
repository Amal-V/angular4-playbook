import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import {UserService} from './user/user.service';
import {AuthguardGuard} from './authguard.guard';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import {GoogleSignInComponent} from 'angular-google-signin';

const appRoutes:Routes = [
{
  path:'login',
  component: LoginFormComponent
},
{
  path:'register',
  component: RegisterComponent
},
{
  path:'dashboard',
  canActivate: [AuthguardGuard],
  component: DashboardComponent
}
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,
    GoogleSignInComponent
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule        
  ],
  providers: [UserService,AuthguardGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
