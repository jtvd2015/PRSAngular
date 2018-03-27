import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequestCreateComponent } from './prequest-create.component';

describe('PrequestCreateComponent', () => {
  let component: PrequestCreateComponent;
  let fixture: ComponentFixture<PrequestCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrequestCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequestCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
