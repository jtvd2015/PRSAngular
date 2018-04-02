import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseRequestlineListComponent } from './purchase-requestline-list.component';

describe('PurchaseRequestlineListComponent', () => {
  let component: PurchaseRequestlineListComponent;
  let fixture: ComponentFixture<PurchaseRequestlineListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PurchaseRequestlineListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseRequestlineListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
