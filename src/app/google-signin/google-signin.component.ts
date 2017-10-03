import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from "angular4-social-login";
import { Router } from '@angular/router';
import {UserService} from '../user/user.service';
import { HttpClient } from '@angular/common/http';
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-google-signin',
  templateUrl: './google-signin.component.html',
  styleUrls: ['./google-signin.component.css']
})
export class GoogleSigninComponent implements OnInit {

  sample: SocialUser;

  constructor(private router:Router,private user: UserService,private authService: AuthService,private http: HttpClient) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.sample = user;
      if(this.sample) {
        console.log(this.sample);
        var body = { "name": this.sample.name, "email":this.sample.email,"image":this.sample.photoUrl, "remember-me": "false" };
        this.http.post('http://localhost:3000/', body)
    // See below - subscribe() is still necessary when using post().
        .subscribe(res => {console.log(res)
        this.user.setUserLoggedIn();
        }),
        err => {console.log("Error occured");};
      }

    });
  }

  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    
    

  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  signOut(): void {
    this.authService.signOut();
    this.router.navigate(['login'])
  }
}
