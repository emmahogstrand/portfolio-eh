import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-projects-page',
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {

  constructor(
    private readonly router: Router,
  ) {}

  lostInTranslationPage(){
    this.router.navigate(['/lostInTranslation']);
  }

  pokemonApiPage(){
    this.router.navigate(['/pokemonApi']);
  }

  homePage(){
    this.router.navigate(['']);

  }
}
