import { Component, OnInit, QueryList, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {
  PerfectScrollbarDirective,
  PerfectScrollbarConfigInterface,
} from "ngx-perfect-scrollbar";

@Component({
  selector: 'app-showroom',
  templateUrl: './showroom.component.html',
  styleUrls: ['./showroom.component.scss']
})
export class ShowroomComponent implements OnInit {
  loggedIn:boolean = false;

  @ViewChildren(PerfectScrollbarDirective) pss: QueryList<
    PerfectScrollbarDirective
  >;

  constructor(public route: Router) { }

  ngOnInit() {
    if(localStorage.getItem('userType')=='customer'){
      this.loggedIn = true;
    }else{
      this.loggedIn = false;
    }
  }

  closePrivacyDialog(){
    document.getElementById('privacy-dialog').style.display = 'none';
  }

  closeSubscribeDialog(){
    document.getElementById('subscribe-dialog').style.display='none';
  }

  public scrollToTop() {
    window.scrollTo(0,0);
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
