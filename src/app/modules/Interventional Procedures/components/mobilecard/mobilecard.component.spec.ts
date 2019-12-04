import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MobilecardComponent } from './mobilecard.component';

describe('MobilecardComponent', () => {
  let component: MobilecardComponent;
  let fixture: ComponentFixture<MobilecardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MobilecardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MobilecardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
