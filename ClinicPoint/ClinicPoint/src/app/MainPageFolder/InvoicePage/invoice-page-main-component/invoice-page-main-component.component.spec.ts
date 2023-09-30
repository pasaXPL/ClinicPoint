import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoicePageMainComponentComponent } from './invoice-page-main-component.component';

describe('InvoicePageMainComponentComponent', () => {
  let component: InvoicePageMainComponentComponent;
  let fixture: ComponentFixture<InvoicePageMainComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoicePageMainComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoicePageMainComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
