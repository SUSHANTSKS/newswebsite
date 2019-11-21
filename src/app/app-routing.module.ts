import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HeadlineComponent} from './headline/headline.component';
import {NewslistComponent} from './newslist/newslist.component';
import {IndiaNewsComponent} from './india-news/india-news.component';
import {CricketNewsComponent} from './cricket-news/cricket-news.component';

const routes: Routes = [
  {path: '', redirectTo: 'news-list', pathMatch: 'full'}, 
  { path: 'news-list', component: NewslistComponent },
  { path: 'Headline', component: HeadlineComponent },
  { path: 'news-india', component: IndiaNewsComponent },
  { path: 'news-cricket', component: CricketNewsComponent },
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
