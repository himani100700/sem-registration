import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagestudentComponent } from './managestudent.component';
import {MatInputModule} from '@angular/material/input';
import {MatTableModule} from '@angular/material/table';

describe('ManagestudentComponent', () => {
  let component: ManagestudentComponent;
  let fixture: ComponentFixture<ManagestudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManagestudentComponent ],
      imports: [
        MatInputModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagestudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
