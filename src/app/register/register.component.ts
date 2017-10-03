import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private router:Router,private user: UserService,private http: HttpClient) { }

  ngOnInit() {
  }
register(name,email,uname,pass) {
	// this.router.navigate(['login'])
		console.log("DFGDFG");
	  	 // var username = e.target.elements[0].value;
	  	 // var password = e.target.elements[1].value;
	  	 console.log(name,email,uname,pass);
	  	// var type = {"Content-Type":"application/json"};
	  	var body = { "name": name,"email": email,"user": uname, "pass": pass };
	  	this.http.post('http://localhost:3000/signup', body)
  // See below - subscribe() is still necessary when using post().
  .subscribe(res => {console.log(res)
  this.user.setUserLoggedIn();
  this.router.navigate(['dashboard'])}),
  err => {console.log("Error occured");};
  //     console.log("111");
	  	// if( username == 'admin' && password =='admin'){
	  	// 	this.user.setUserLoggedIn();
	  	// 	this.router.navigate(['dashboard'])
	  	// }
}
}
