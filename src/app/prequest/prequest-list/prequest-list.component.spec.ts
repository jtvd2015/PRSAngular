import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrequestListComponent } from './prequest-list.component';

describe('PrequestListComponent', () => {
  let component: PrequestListComponent;
  let fixture: ComponentFixture<PrequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
