import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { News } from '../interfaces/newsInterface';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  url='http://localhost:3000/'
  constructor(private http:HttpClient) { }
  getNews(){
    return this.http.get<News[]>(this.url+'news')
  }

  deleteNews(id:string){
    return this.http.delete(this.url+'news/'+id)
  }

  postNews(news:News){
    return this.http.post(this.url+'news',news)
  }

  getSingleNews(id:string){
    return this.http.get(this.url+'news/'+id)
  }

  updateNews(id:string,body:News){
    return this.http.patch(this.url+'news/'+id,body)
  }
}
