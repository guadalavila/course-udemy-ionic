import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Article, NewsResponse } from '../interfaces';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiKey = environment.apiKey;

@Injectable({
  providedIn: 'root',
})
export class NewsService {
  constructor(private http: HttpClient) {}

  getTopHeadlines(): Observable<Article[]> {
    return this.http
      .get<NewsResponse>(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-08-14&sortBy=publishedAt&apiKey=${apiKey}`
      )
      .pipe(map(({ articles }) => articles));
  }
}
