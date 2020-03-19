import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRentWreslerComponent } from './page-rent-wresler.component';

describe('PageRentWreslerComponent', () => {
  let component: PageRentWreslerComponent;
  let fixture: ComponentFixture<PageRentWreslerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRentWreslerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRentWreslerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
