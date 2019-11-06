import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeappointmentComponent } from './makeappointment.component';

describe('MakeappointmentComponent', () => {
  let component: MakeappointmentComponent;
  let fixture: ComponentFixture<MakeappointmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeappointmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeappointmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
