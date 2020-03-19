import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageWreslersListComponent } from './page-wreslers-list.component';

describe('PageWreslersListComponent', () => {
  let component: PageWreslersListComponent;
  let fixture: ComponentFixture<PageWreslersListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageWreslersListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageWreslersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
