import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMatchDetailsComponent } from './page-match-details.component';

describe('PageMatchDetailsComponent', () => {
  let component: PageMatchDetailsComponent;
  let fixture: ComponentFixture<PageMatchDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMatchDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMatchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
