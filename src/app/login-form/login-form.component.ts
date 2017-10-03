import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user/user.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	public results;

  constructor(private router:Router,private user: UserService,private http: HttpClient) { }

  ngOnInit() {}
	loginUser(username,password) {
		console.log("DFGDFG");
	  	 // var username = e.target.elements[0].value;
	  	 // var password = e.target.elements[1].value;
	  	 console.log(username,password);
	  	// var type = {"Content-Type":"application/json"};
	  	var body = { "user": username, "pass": password, "remember-me": "false" };
	  	this.http.post('http://localhost:3000/', body)
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
register(){
	this.router.navigate(['register'])
}
signinGoogle(gapi){
console.log(gapi);
}
}