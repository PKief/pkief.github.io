import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from '../article.service';
import { Article } from '../models/article';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleListComponent {
  articles: Observable<Article[]>;

  constructor(private articleService: ArticleService) {
    this.articles = this.articleService.getArticles();
  }

  goToLink(url: string) {
    window.open(url, '_blank');
  }
}
