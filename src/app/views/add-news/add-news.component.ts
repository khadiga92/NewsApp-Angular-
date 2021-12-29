import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-add-news',
  templateUrl: './add-news.component.html',
  styleUrls: ['./add-news.component.css']
})
export class AddNewsComponent implements OnInit {

  constructor(private fb:FormBuilder,private newsService:NewsService,private router:Router) { }
  newsForm= this.fb.group({
    title:['',[Validators.required]],
    description:['',Validators.required],
  })

  get newsValue(){
    return this.newsForm.controls
  }

  addNews(news:News){
    this.newsService.postNews(news).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.router.navigateByUrl('/news')
      }
    })
  }

  ngOnInit(): void {
  }

}
