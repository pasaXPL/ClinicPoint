import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorPageMainComponentComponent } from './doctor-page-main-component.component';

describe('DoctorPageMainComponentComponent', () => {
  let component: DoctorPageMainComponentComponent;
  let fixture: ComponentFixture<DoctorPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoctorPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DoctorPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
