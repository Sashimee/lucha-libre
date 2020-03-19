import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNewMatchComponent } from './page-new-match.component';

describe('PageNewMatchComponent', () => {
  let component: PageNewMatchComponent;
  let fixture: ComponentFixture<PageNewMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageNewMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNewMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
