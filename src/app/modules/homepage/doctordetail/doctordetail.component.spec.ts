import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctordetailComponent } from './doctordetail.component';

describe('DoctordetailComponent', () => {
  let component: DoctordetailComponent;
  let fixture: ComponentFixture<DoctordetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctordetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctordetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
