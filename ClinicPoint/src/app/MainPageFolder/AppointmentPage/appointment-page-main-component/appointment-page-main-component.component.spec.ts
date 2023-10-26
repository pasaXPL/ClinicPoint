import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentPageMainComponentComponent } from './appointment-page-main-component.component';

describe('AppointmentPageMainComponentComponent', () => {
  let component: AppointmentPageMainComponentComponent;
  let fixture: ComponentFixture<AppointmentPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointmentPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
