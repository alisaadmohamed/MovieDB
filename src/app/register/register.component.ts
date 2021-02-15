import { Component, OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
Router



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private _AuthService:AuthService, public _Router:Router) {}

  error:string="";
  
  registerForm:FormGroup = new FormGroup({
    first_name:new FormControl(null ,[Validators.required, Validators.minLength(3) ,Validators.maxLength(10) ]),
    last_name :new FormControl(null ,[Validators.required , Validators. minLength(3) , Validators.maxLength(10)]),
    email:new FormControl(null , [Validators.email, Validators.required ]),
    password :new FormControl(null , [Validators.required, Validators.pattern('^[a-zA-Z]{4,10}$')]),
    age :new FormControl(null , [Validators.min(10),Validators.required , Validators.max(80)])
    
  })

registerButton(formData:any)
{
  if(formData.valid)
  {
     this._AuthService.register(formData.value).subscribe((data)=>{

      if(data.message === "success"){
        this._Router.navigate(['/login']);
      }
      else{

        this.error = data.message;
      }
      
     })
  }
}
  

  ngOnInit(): void {
  }

}
 