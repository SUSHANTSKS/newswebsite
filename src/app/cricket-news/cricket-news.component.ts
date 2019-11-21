import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cricket-news',
  templateUrl: './cricket-news.component.html',
  styleUrls: ['./cricket-news.component.css']
})
export class CricketNewsComponent implements OnInit {

  cricketNewsReq: any = {};
  cricketNewsURL: string;
  cricketNewsRes: any={};
   xyz:any;
  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  ngOnInit() {
    this.cricketNewsURL = 'https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=1420b6eff7934b7ab090fa341ce5a8e4';
    this.http.get(this.cricketNewsURL, this.cricketNewsReq)
      .subscribe(res => {
       this.cricketNewsRes=res;
  });
  } 
}
