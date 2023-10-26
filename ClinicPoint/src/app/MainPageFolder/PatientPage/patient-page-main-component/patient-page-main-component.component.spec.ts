import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientPageMainComponentComponent } from './patient-page-main-component.component';

describe('PatientPageMainComponentComponent', () => {
  let component: PatientPageMainComponentComponent;
  let fixture: ComponentFixture<PatientPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
