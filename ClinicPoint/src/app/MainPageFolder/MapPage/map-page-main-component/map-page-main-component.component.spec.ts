import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapPageMainComponentComponent } from './map-page-main-component.component';

describe('MapPageMainComponentComponent', () => {
  let component: MapPageMainComponentComponent;
  let fixture: ComponentFixture<MapPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
