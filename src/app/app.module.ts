import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes} from '@angular/router';
import {UserService} from './user/user.service';
import { AuthService } from "angular4-social-login";
import {AuthguardGuard} from './authguard.guard';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { GoogleSigninComponent } from './google-signin/google-signin.component';
import { SocialLoginModule } from "angular4-social-login";
import { AuthServiceConfig, GoogleLoginProvider, FacebookLoginProvider } from 'angular4-social-login';

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("624796833023-clhjgupm0pu6vgga7k5i5bsfp6qp6egh.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("561602290896109")
  }
]);

export function provideConfig() {
  return config;
}

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
},
{
  path:'sign-in',
  component: GoogleSigninComponent
}
]


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginFormComponent,
    FooterComponent,
    DashboardComponent,
    RegisterComponent,GoogleSigninComponent
    
  ],
  imports: [
    BrowserModule,RouterModule.forRoot(appRoutes),HttpClientModule,SocialLoginModule       
  ],
  providers: [UserService,AuthguardGuard,AuthService,{
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
