import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequestEditComponent } from './prequest-edit.component';

describe('PrequestEditComponent', () => {
  let component: PrequestEditComponent;
  let fixture: ComponentFixture<PrequestEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrequestEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequestEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
