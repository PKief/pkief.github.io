import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from './models/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  constructor(private http: HttpClient) {}

  getArticles(): Observable<Article[]> {
    const articlesUrl = ['assets', 'data', 'articles.json'].join('/');
    return this.http.get<Article[]>(articlesUrl);
  }
}
