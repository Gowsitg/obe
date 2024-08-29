import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'application';
 
  constructor(private router:Router) {
  }
  ngOnInit(): void {
    let currenturl = this.router.url;
    console.log(this.router.url)
   if(currenturl == '/'){
    this.router.navigate(['/modules/program']);
  }
    
  }
}
