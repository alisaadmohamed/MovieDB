import { Component, OnInit } from '@angular/core';
import { AuthService } from './../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isLogin:boolean = false;


  constructor(public _AuthService:AuthService , private _Router:Router) { 

_AuthService.currentUser.subscribe(()=>{

if(_AuthService.currentUser.getValue() != null){

this.isLogin =  true;
}else{

  this.isLogin = false;
}

})


}

   
logout(){
  this._AuthService.logOut();




}




  ngOnInit(): void {
  }

}
