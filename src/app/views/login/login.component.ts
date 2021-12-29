import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  invalidLogIn:boolean = false
  token:any
  constructor(private authService:AuthService,private router:Router) { }
  logIn(credentials:any){
    this.authService.logIn(credentials).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.token = res.token
        localStorage.setItem('token',this.token)
        this.router.navigateByUrl('/profile')
      },
      error:(httpError:any)=>{
        console.log(httpError)
        this.invalidLogIn = true
      }
    })
  }

  changeData(){
    this.invalidLogIn = false
  }

  ngOnInit(): void {
  }

}

// if(httpError.error.code === 11000){
//   this.invalidEmail = true
//   // this.message = httpError.error.errors?.age.message
// }
// else if(httpError.error.errors?.password){
//   this.invalidPassword = true
// }
