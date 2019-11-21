import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Component({
  selector: 'app-india-news',
  templateUrl: './india-news.component.html',
  styleUrls: ['./india-news.component.css']
})
export class IndiaNewsComponent implements OnInit {
  indiaNewsReq: any = {};
  indiaNewsURL: string;
  indiaNewsRes: any={};

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  ngOnInit() {
    this.indiaNewsURL = 'https://newsapi.org/v2/top-headlines?sources=google-news-in&apiKey=1420b6eff7934b7ab090fa341ce5a8e4';
    this.http.get(this.indiaNewsURL, this.indiaNewsReq)
      .subscribe(res => {
       this.indiaNewsRes=res;
  });
  }

}
