import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Users } from 'src/app/interfaces/userInterface';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private userservice:UsersService) { }
  users:Users = {}
  getProfile(){
  this.userservice.getProfile().subscribe({
    next:(res:any)=>{
      this.users = res
      console.log(res)
    },
    error:(httpError:any)=>{
      console.log(httpError)
    }
  })
}
  ngOnInit(): void {
    this.getProfile()
  }

}
