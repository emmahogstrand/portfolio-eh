import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {
 
  constructor(
    private readonly router: Router,
  ) {}

  contactPage(){
  this.router.navigate(['/contact']);

}

  projectsPage(){
  this.router.navigate(['/projects']);

}

}


