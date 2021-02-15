import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';



import { AuthService } from './../auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public _AuthService:AuthService, private _Router:Router) { }
  
error:string=''


  loginForm:FormGroup = new FormGroup({

    email:new FormControl(null , [Validators.required, Validators.email]),
    password :new FormControl(null , [Validators.required, Validators.pattern('^[a-zA-Z]{4,10}$')]),

  });


  loginButton(formData:FormGroup){

  if(formData.valid){
 
    this._AuthService.signIn(formData.value).subscribe((response)=>{
   
      if(response.message === 'success'){
        localStorage.setItem('currentUser',response.token);
        this._AuthService.saveCurrentUser()
        this._Router.navigate(['/home']);
      }
      else{


        this.error = response.message;
      }
 

    })

  }
  }




  ngOnInit(): void {
  }

}
