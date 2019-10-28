import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthyBlogComponent } from './healthy-blog.component';

describe('HealthyBlogComponent', () => {
  let component: HealthyBlogComponent;
  let fixture: ComponentFixture<HealthyBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthyBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthyBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
