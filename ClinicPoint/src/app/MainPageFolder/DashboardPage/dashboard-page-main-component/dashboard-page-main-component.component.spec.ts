import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardPageMainComponentComponent } from './dashboard-page-main-component.component';

describe('DashboardPageMainComponentComponent', () => {
  let component: DashboardPageMainComponentComponent;
  let fixture: ComponentFixture<DashboardPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
