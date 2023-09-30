import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageMainComponentComponent } from './main-page-main-component.component';

describe('MainPageMainComponentComponent', () => {
  let component: MainPageMainComponentComponent;
  let fixture: ComponentFixture<MainPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
