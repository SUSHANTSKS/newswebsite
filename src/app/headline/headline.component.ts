import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headline',
  templateUrl: './headline.component.html',
  styleUrls: ['./headline.component.css']
})
export class HeadlineComponent implements OnInit {
  headlineReq: any = {};
  headlineURL: string;
  headlineRes: any={};

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  ngOnInit() {
    this.headlineURL = 'https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=1420b6eff7934b7ab090fa341ce5a8e4';
    this.http.get(this.headlineURL, this.headlineReq)
      .subscribe(res => {
       this.headlineRes=res;
  });

  }

}
