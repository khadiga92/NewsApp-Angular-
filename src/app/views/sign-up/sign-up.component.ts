import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  invalidAge:boolean = false
  invalidEmail:boolean = false
  message:any
  token:any
  constructor(private authService:AuthService,private router:Router) { }
  signUp(credentials:any){
    this.authService.signUp(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.token = res.token
        localStorage.setItem('token',this.token)
        this.router.navigateByUrl('/profile')
      },
      error:(httpError:any)=>{
        console.log(httpError)
        if(httpError.error.errors?.age){
          this.invalidAge = true
          this.message = httpError.error.errors?.age.message
        }
        else if(httpError.error.code === 11000){
          this.invalidEmail = true
        }
      }
    })
  }

  changeAge(){
    this.invalidAge = false
  }

  changeEmail(){
    this.invalidEmail = false
  }
  ngOnInit(): void {
  }

}
