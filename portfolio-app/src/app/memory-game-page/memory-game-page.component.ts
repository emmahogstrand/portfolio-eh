import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-memory-game-page',
  templateUrl: './memory-game-page.component.html',
  styleUrls: ['./memory-game-page.component.css']
})
export class MemoryGamePageComponent {
  constructor(
    private readonly router: Router,
  ) {}

  projectsPage(){
    this.router.navigate(['/projects']);
  }
}
