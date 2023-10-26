import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingPageMainComponentComponent } from './setting-page-main-component.component';

describe('SettingPageMainComponentComponent', () => {
  let component: SettingPageMainComponentComponent;
  let fixture: ComponentFixture<SettingPageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingPageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SettingPageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
