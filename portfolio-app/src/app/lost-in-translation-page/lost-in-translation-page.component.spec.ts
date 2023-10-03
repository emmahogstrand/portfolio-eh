import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LostInTranslationPageComponent } from './lost-in-translation-page.component';

describe('LostInTranslationPageComponent', () => {
  let component: LostInTranslationPageComponent;
  let fixture: ComponentFixture<LostInTranslationPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LostInTranslationPageComponent]
    });
    fixture = TestBed.createComponent(LostInTranslationPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
