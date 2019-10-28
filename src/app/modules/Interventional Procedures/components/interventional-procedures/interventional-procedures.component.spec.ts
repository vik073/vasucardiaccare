import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterventionalProceduresComponent } from './interventional-procedures.component';

describe('InterventionalProceduresComponent', () => {
  let component: InterventionalProceduresComponent;
  let fixture: ComponentFixture<InterventionalProceduresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterventionalProceduresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterventionalProceduresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
