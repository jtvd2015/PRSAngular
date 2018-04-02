import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestlineEditComponent } from './purchase-requestline-edit.component';

describe('PurchaseRequestlineEditComponent', () => {
  let component: PurchaseRequestlineEditComponent;
  let fixture: ComponentFixture<PurchaseRequestlineEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestlineEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestlineEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
