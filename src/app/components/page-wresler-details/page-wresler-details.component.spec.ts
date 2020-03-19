import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWreslerDetailsComponent } from './page-wresler-details.component';

describe('PageWreslerDetailsComponent', () => {
  let component: PageWreslerDetailsComponent;
  let fixture: ComponentFixture<PageWreslerDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWreslerDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWreslerDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
