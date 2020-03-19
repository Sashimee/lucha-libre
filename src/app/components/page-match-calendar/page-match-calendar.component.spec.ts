import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMatchCalendarComponent } from './page-match-calendar.component';

describe('PageMatchCalendarComponent', () => {
  let component: PageMatchCalendarComponent;
  let fixture: ComponentFixture<PageMatchCalendarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMatchCalendarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMatchCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
