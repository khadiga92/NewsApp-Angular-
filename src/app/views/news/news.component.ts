import { Component, OnInit } from '@angular/core';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  news:News[] = []
  constructor(private newsService:NewsService) { }
  getNews(){
    this.newsService.getNews().subscribe({
      next:(res:any)=>{
        console.log(res)
        this.news = res
      }
    })
  }

  deleteNews(news:string,i:number){
    this.newsService.deleteNews(news).subscribe({
      next:()=>{
        this.news.splice(i,1)
      }
    })
  }

  ngOnInit(): void {
    this.getNews()
  }

}
