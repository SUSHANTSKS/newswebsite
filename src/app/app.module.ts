import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HeaderComponent } from './header/header.component';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { MatIconModule } from "@angular/material/icon";


import {MatSortModule} from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NewslistComponent } from './newslist/newslist.component';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { HeadlineComponent } from './headline/headline.component';
import { IndiaNewsComponent } from './india-news/india-news.component';
import { CricketNewsComponent } from './cricket-news/cricket-news.component';

@NgModule({
  declarations: [
    AppComponent,
    
    HeaderComponent,
    NewslistComponent,
    HeadlineComponent,
    IndiaNewsComponent,
    CricketNewsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatSortModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
