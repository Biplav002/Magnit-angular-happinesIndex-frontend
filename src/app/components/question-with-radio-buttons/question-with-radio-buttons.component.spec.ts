import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionWithRadioButtonsComponent } from './question-with-radio-buttons.component';

describe('QuestionWithRadioButtonsComponent', () => {
  let component: QuestionWithRadioButtonsComponent;
  let fixture: ComponentFixture<QuestionWithRadioButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionWithRadioButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionWithRadioButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
