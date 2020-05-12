import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatestdComponent } from './createstd.component';

describe('CreatestdComponent', () => {
  let component: CreatestdComponent;
  let fixture: ComponentFixture<CreatestdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatestdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatestdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
