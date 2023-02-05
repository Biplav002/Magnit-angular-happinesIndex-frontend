import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionWithDropDownComponent } from './question-with-drop-down.component';

describe('QuestionWithDropDownComponent', () => {
  let component: QuestionWithDropDownComponent;
  let fixture: ComponentFixture<QuestionWithDropDownComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuestionWithDropDownComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuestionWithDropDownComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
