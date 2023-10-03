import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pokemon-api-page',
  templateUrl: './pokemon-api-page.component.html',
  styleUrls: ['./pokemon-api-page.component.css']
})
export class PokemonApiPageComponent {

  constructor(
    private readonly router: Router,
  ) {}

  projectsPage(){
    this.router.navigate(['/projects']);
  }
}
