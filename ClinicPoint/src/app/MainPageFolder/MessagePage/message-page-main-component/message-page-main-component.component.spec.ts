import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagePageMainComponentComponent } from './message-page-main-component.component';

describe('MessagePageMainComponentComponent', () => {
  let component: MessagePageMainComponentComponent;
  let fixture: ComponentFixture<MessagePageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagePageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MessagePageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
