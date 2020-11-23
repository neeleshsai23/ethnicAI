import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public route:Router) { }

  username:any;
  username_entered:boolean = false;
  show_next:boolean = false;

  ngOnInit(): void {
  }

  loginForm = new FormGroup({
    username: new FormControl(''),
    // password: new FormControl('')
  })

  gotoLogin(){
    this.show_next = false;
  }

  onSubmit(values:Object){
    if(values["username"]=="user@customer.com" || values["username"]=="admin@ethnic.com" || values["username"]=="admin@vendor.com"){
      this.username = values["username"];
      this.username_entered = true;
      this.show_next = true;
    }else{
      alert("Invalid Credentials")
    }
    

  }

}



