import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonApiPageComponent } from './pokemon-api-page.component';

describe('PokemonApiPageComponent', () => {
  let component: PokemonApiPageComponent;
  let fixture: ComponentFixture<PokemonApiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonApiPageComponent]
    });
    fixture = TestBed.createComponent(PokemonApiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
