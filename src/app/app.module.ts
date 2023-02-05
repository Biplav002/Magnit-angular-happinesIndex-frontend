import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { QuestionnaireComponent } from "./components/questionnaire/questionnaire.component";
import { MatStepperModule } from "@angular/material/stepper";
import { MatSelectModule } from "@angular/material/select";
import { QuestionWithDropDownComponent } from "./components/question-with-drop-down/question-with-drop-down.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatDialogModule } from "@angular/material/dialog";
import { QuestionWithRadioButtonsComponent } from "./components/question-with-radio-buttons/question-with-radio-buttons.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { QuestionWithStarRatingComponent } from "./components/question-with-star-rating/question-with-star-rating.component";
import { HttpClientModule } from "@angular/common/http";
import { OverallCompanyRatingComponent } from './components/overall-company-rating/overall-company-rating.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionnaireComponent,
    QuestionWithDropDownComponent,
    QuestionWithRadioButtonsComponent,
    QuestionWithStarRatingComponent,
    OverallCompanyRatingComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatSelectModule,

    MatFormFieldModule,
    MatInputModule,

    MatToolbarModule,
    MatButtonModule,
    MatDialogModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
