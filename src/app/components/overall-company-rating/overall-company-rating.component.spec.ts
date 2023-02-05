import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverallCompanyRatingComponent } from './overall-company-rating.component';

describe('OverallCompanyRatingComponent', () => {
  let component: OverallCompanyRatingComponent;
  let fixture: ComponentFixture<OverallCompanyRatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverallCompanyRatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverallCompanyRatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
