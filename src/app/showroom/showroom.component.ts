import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  loggedIn:boolean = false;

  constructor(public route: Router) { }

  ngOnInit() {
    if(localStorage.getItem('userType')=='customer'){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  gotoLogin(){
    this.route.navigate(['/login']);
  }

  logout(){
    localStorage.clear();
    this.route.navigate(['/login']);
  }

  viewCategories(){
    document.getElementById('categories-mobile').style.display = 'flex';
  }

  closeCategories(){
    document.getElementById('categories-mobile').style.display= 'none'
  }

  closeDialog(){
    document.getElementById('country-dialog').style.display = 'none';
  }

}
