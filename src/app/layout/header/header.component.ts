import { Component, OnInit } from '@angular/core';
import { Users } from 'src/app/interfaces/userInterface';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  // invalidToken:boolean = true

  constructor(private authService:AuthService) { }
  // validToken(){
  //   let token = this.authService.getToken()
  //   if(token){
  //     this.invalidToken = false
  //   }else if(!token){
  //     this.invalidToken = true
  //   }
  // }

  get isLoogedIn(){
    let token = this.authService.getToken()
    if(token){
      return true
    }
    return false
  }

  logout(){
    this.authService.logout().subscribe({
      next:()=>{
        localStorage.removeItem('token')
      }
    })
  }




  ngOnInit(): void {
  }

}
