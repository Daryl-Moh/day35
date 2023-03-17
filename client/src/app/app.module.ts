import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { NewsCriteriaComponent } from './components/news-criteria.component';
import { ArticleComponent } from './components/article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NewsService } from './news.service';

@NgModule({
  declarations: [
    AppComponent,
    NewsCriteriaComponent,
    ArticleComponent
  ],
  imports: [
    BrowserModule, ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [NewsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
