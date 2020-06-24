import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultypopupComponent } from './facultypopup.component';

describe('FacultypopupComponent', () => {
  let component: FacultypopupComponent;
  let fixture: ComponentFixture<FacultypopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultypopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultypopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
