import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLibDueComponent } from './create-lib-due.component';

describe('CreateLibDueComponent', () => {
  let component: CreateLibDueComponent;
  let fixture: ComponentFixture<CreateLibDueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateLibDueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateLibDueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
