import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsTimeLineComponent } from './news-time-line.component';

describe('NewsTimeLineComponent', () => {
  let component: NewsTimeLineComponent;
  let fixture: ComponentFixture<NewsTimeLineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsTimeLineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsTimeLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
