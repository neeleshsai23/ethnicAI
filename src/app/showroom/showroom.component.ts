import { Component, OnInit, QueryList, ViewChildren,AfterViewInit} from '@angular/core';
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
export class ShowroomComponent implements OnInit,AfterViewInit {
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

  ngAfterViewInit(){
    document.getElementById('search1').addEventListener('mouseenter',()=>{
      document.getElementById('line1').style.display="none";
    })

    document.getElementById('search1').addEventListener('mouseleave',()=>{
      document.getElementById('line1').style.display="flex";
    })

    document.getElementById('search2').addEventListener('mouseenter',()=>{
      document.getElementById('line2').style.display="none";
    })

    document.getElementById('search2').addEventListener('mouseleave',()=>{
      document.getElementById('line2').style.display="flex";
    })

    document.getElementById('search3').addEventListener('mouseenter',()=>{
      document.getElementById('line3').style.display="none";
    })

    document.getElementById('search3').addEventListener('mouseleave',()=>{
      document.getElementById('line3').style.display="flex";
    })


    document.getElementById('search1').addEventListener('click',()=>{
      document.getElementById('search1').style.background="rgba(255,255,255,1)";

      document.getElementById('search').style.background = "rgb(248,248,248)";
      document.getElementById('search2').style.removeProperty('background');
      document.getElementById('search3').style.removeProperty('background');
      document.getElementById('search4').style.removeProperty('background');
    })
    
    document.getElementById('search2').addEventListener('click',()=>{
      document.getElementById('search2').style.background="rgba(255,255,255,1)";
      document.getElementById('search').style.background = "rgb(248,248,248)";
      document.getElementById('search1').style.removeProperty('background');
      document.getElementById('search3').style.removeProperty('background');
      document.getElementById('search4').style.removeProperty('background');
    })
    
    document.getElementById('search3').addEventListener('click',()=>{
      document.getElementById('search3').style.background="rgba(255,255,255,1)";
      document.getElementById('search').style.background = "rgb(248,248,248)";
      document.getElementById('search1').style.removeProperty('background');
      document.getElementById('search2').style.removeProperty('background');
      
      document.getElementById('search4').style.removeProperty('background');
    })
    
    document.getElementById('search4').addEventListener('click',()=>{
      document.getElementById('search4').style.background="rgba(255,255,255,1)";
      document.getElementById('search').style.background = "rgb(248,248,248)";
      document.getElementById('search1').style.removeProperty('background');
      document.getElementById('search2').style.removeProperty('background');
      document.getElementById('search3').style.removeProperty('background');
     
    })

    // document.getElementById('searchbutton').addEventListener('click',()=>{
      

    // })
  }

  logoutUser(){
    localStorage.clear();
    window.location.reload();
  }

  submitSearch(){
    console.log('hello')
    document.getElementById('search').style.background="white";
      document.getElementById('search1').style.removeProperty('background');
      document.getElementById('search2').style.removeProperty('background');
      document.getElementById('search3').style.removeProperty('background');
      document.getElementById('search4').style.removeProperty('background');
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
