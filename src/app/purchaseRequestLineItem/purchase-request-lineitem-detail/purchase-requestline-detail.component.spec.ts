import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestlineDetailComponent } from './purchase-requestline-detail.component';

describe('PurchaseRequestlineDetailComponent', () => {
  let component: PurchaseRequestlineDetailComponent;
  let fixture: ComponentFixture<PurchaseRequestlineDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestlineDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestlineDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
