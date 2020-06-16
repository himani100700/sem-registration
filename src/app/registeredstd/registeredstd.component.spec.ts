import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisteredstdComponent } from './registeredstd.component';

describe('RegisteredstdComponent', () => {
  let component: RegisteredstdComponent;
  let fixture: ComponentFixture<RegisteredstdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegisteredstdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisteredstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
