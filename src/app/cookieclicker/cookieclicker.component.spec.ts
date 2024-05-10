import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CookieclickerComponent } from './cookieclicker.component';

describe('CookieclickerComponent', () => {
  let component: CookieclickerComponent;
  let fixture: ComponentFixture<CookieclickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CookieclickerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CookieclickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
