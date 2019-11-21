import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';



@Component({
  selector: 'app-newslist',
  templateUrl: './newslist.component.html',
  styleUrls: ['./newslist.component.css']
})
export class NewslistComponent implements OnInit {
  newsDetailsReq: any = {};
  newsDetailsURL: string;
  newsDetailsRes: any={};

  constructor(
    public http: HttpClient,
    public router: Router,
  ) { }

  ngOnInit() {
    
    this.newsDetailsURL = 'https://newsapi.org/v2/everything?q=<Apple>&apiKey=1420b6eff7934b7ab090fa341ce5a8e4';
    this.http.get(this.newsDetailsURL, this.newsDetailsReq)
      .subscribe(res => {
       this.newsDetailsRes=res;
  });

}
}
