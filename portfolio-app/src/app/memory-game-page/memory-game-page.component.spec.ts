import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemoryGamePageComponent } from './memory-game-page.component';

describe('MemoryGamePageComponent', () => {
  let component: MemoryGamePageComponent;
  let fixture: ComponentFixture<MemoryGamePageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MemoryGamePageComponent]
    });
    fixture = TestBed.createComponent(MemoryGamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
