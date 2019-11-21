import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CricketNewsComponent } from './cricket-news.component';

describe('CricketNewsComponent', () => {
  let component: CricketNewsComponent;
  let fixture: ComponentFixture<CricketNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CricketNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CricketNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
