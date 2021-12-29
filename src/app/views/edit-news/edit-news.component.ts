import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { News } from 'src/app/interfaces/newsInterface';
import { NewsService } from 'src/app/services/news.service';

@Component({
  selector: 'app-edit-news',
  templateUrl: './edit-news.component.html',
  styleUrls: ['./edit-news.component.css']
})
export class EditNewsComponent implements OnInit {

  constructor(private newsService:NewsService,private route:ActivatedRoute,private router:Router) { }
  id:string = this.route.snapshot.params['id']
  news:News = {}
  getSingleNews(){
    this.newsService.getSingleNews(this.id).subscribe({
      next:(res:any)=>{
        console.log(res)
        this.news = res
      }
    })
  }

  updateNews(data:News){
    this.newsService.updateNews(this.id,data).subscribe({
      next:(res:any)=>{
        this.router.navigateByUrl('/news')
      }
    })
  }

  ngOnInit(): void {
    this.getSingleNews
  }

}
