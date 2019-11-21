import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
  }
  goToHome(){

    this.router.navigate(['/Home']);
  }
  goToHeadLine(){
    this.router.navigate(['/Headline']);
  }
 
  goToNewslist(){
  
    this.router.navigate(['/news-list']);
  }
  goToIndiaNews(){
    this.router.navigate(['/news-india']);
  }
  
  goToCricketNews(){
    this.router.navigate(['/news-cricket']);
  }
}
