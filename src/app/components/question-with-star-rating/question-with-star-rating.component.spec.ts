import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionWithStarRatingComponent } from './question-with-star-rating.component';

describe('QuestionWithStarRatingComponent', () => {
  let component: QuestionWithStarRatingComponent;
  let fixture: ComponentFixture<QuestionWithStarRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionWithStarRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionWithStarRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
