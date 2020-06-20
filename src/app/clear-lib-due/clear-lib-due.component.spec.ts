import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClearLibDueComponent } from './clear-lib-due.component';

describe('ClearLibDueComponent', () => {
  let component: ClearLibDueComponent;
  let fixture: ComponentFixture<ClearLibDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClearLibDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClearLibDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
