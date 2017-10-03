import { Component, OnInit } from '@angular/core';
import {UserService} from '../user/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
public name;
public email;
  constructor(private user: UserService,private http: HttpClient) { }

  ngOnInit(): void {
    this.user.setUserLoggedIn();
    this.http.get('http://localhost:3000/home').subscribe(
      data => {
        console.log("data",data)
        
        if(data){
          this.name = data['name'];
          console.log("Data " + data['name']);
          this.email = data['email'];
        }
        
      },
      err => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("err",err);
        }
      }
    );
  }

}
