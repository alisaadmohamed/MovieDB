import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,BehaviorSubject } from 'rxjs';
import jwtDecode from 'jwt-decode';
import { Router } from '@angular/router';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  currentUser = new BehaviorSubject(null);
  constructor(private _HttpClient:HttpClient , private _Router:Router) { 

   if(localStorage.getItem('currentUser'))
   {
    this.saveCurrentUser();
   }
  }

logOut(){
  this.currentUser.next(null);
  localStorage.removeItem('currentUser');
  this._Router.navigate(['/login'])

}



  register(formData:object):Observable<any>
{
  return this._HttpClient.post('http://route-egypt-api.herokuapp.com/signup', formData);
}
  
signIn(formData:object):Observable<any>
{
  return this._HttpClient.post('http://route-egypt-api.herokuapp.com/signin', formData);
}
  
saveCurrentUser()
{
 
 
  let token:any = localStorage.getItem('currentUser');
let decodedToken:any = jwtDecode(token);

if(decodedToken.first_name){

  this.currentUser.next(decodedToken);
}





  
}

}
