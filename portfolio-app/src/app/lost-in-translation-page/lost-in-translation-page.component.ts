import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lost-in-translation-page',
  templateUrl: './lost-in-translation-page.component.html',
  styleUrls: ['./lost-in-translation-page.component.css']
})
export class LostInTranslationPageComponent {

  constructor(
    private readonly router: Router,
  ) {}

  projectsPage(){
    this.router.navigate(['/projects']);
  }
}
