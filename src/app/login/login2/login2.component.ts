import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login2',
  templateUrl: './login2.component.html',
  styleUrls: ['./login2.component.scss']
})
export class Login2Component implements OnInit {

  constructor(public route: Router) { }

  ngOnInit() {
  }

  @Input() username:any;
  @Input() username_entered:boolean;
  @Output() newItemEvent = new EventEmitter<boolean>();
  otp: boolean = false;



  loginForm = new FormGroup({
    // username: new FormControl(''),
    password: new FormControl('')
  })

  onSubmit(values:Object){
    if(this.username==='user@customer.com' && values["password"]=="Password1!"){
      localStorage.setItem("loginUser", values["username"]);
      localStorage.setItem('userType','customer');
      this.route.navigate([''])
      
    }else if(this.username==='admin@ethnic.com' && values["password"]=="Password1!"){
      localStorage.setItem("loginUser", values["username"]);
      localStorage.setItem('userType','admin');
      this.route.navigate(['/eai/dashboard'])
    }else if(this.username==='admin@vendor.com' && values["password"]=="Password1!"){
      localStorage.setItem("loginUser", values["username"]);
      localStorage.setItem('userType','vendor');
      this.route.navigate(['/vendor'])
    }else{
      alert('Invalid Credentials');
    }

  }

  gotoLogin(value:boolean){
    
    this.newItemEvent.emit(value);
    console.log('clicked')
  }

}
