import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequestDetailComponent } from './prequest-detail.component';

describe('PrequestDetailComponent', () => {
  let component: PrequestDetailComponent;
  let fixture: ComponentFixture<PrequestDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrequestDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequestDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
