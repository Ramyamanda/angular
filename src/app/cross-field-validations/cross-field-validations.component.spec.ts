import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossFieldValidationsComponent } from './cross-field-validations.component';

describe('CrossFieldValidationsComponent', () => {
  let component: CrossFieldValidationsComponent;
  let fixture: ComponentFixture<CrossFieldValidationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossFieldValidationsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrossFieldValidationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
