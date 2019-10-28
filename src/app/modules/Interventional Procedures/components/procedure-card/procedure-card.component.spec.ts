import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedureCardComponent } from './procedure-card.component';

describe('ProcedureCardComponent', () => {
  let component: ProcedureCardComponent;
  let fixture: ComponentFixture<ProcedureCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedureCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedureCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
