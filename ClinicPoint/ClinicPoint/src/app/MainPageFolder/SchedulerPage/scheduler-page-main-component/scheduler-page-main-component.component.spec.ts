import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerPageMainComponentComponent } from './scheduler-page-main-component.component';

describe('SchedulerPageMainComponentComponent', () => {
  let component: SchedulerPageMainComponentComponent;
  let fixture: ComponentFixture<SchedulerPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchedulerPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SchedulerPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
