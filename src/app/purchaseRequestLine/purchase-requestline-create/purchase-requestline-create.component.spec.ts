import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestlineCreateComponent } from './purchase-requestline-create.component';

describe('PurchaseRequestlineCreateComponent', () => {
  let component: PurchaseRequestlineCreateComponent;
  let fixture: ComponentFixture<PurchaseRequestlineCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestlineCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestlineCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
