import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MaterialModule } from '../shared/material/material.module';
import { ArticleListComponent } from './article-list/article-list.component';

@NgModule({
  declarations: [ArticleListComponent],
  imports: [CommonModule, MaterialModule],
  exports: [ArticleListComponent],
})
export class ArticleModule {}
