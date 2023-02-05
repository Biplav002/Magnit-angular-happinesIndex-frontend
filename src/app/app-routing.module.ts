import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { OverallCompanyRatingComponent } from "./components/overall-company-rating/overall-company-rating.component";
import { QuestionWithRadioButtonsComponent } from "./components/question-with-radio-buttons/question-with-radio-buttons.component";
import { QuestionWithStarRatingComponent } from "./components/question-with-star-rating/question-with-star-rating.component";
import { QuestionnaireComponent } from "./components/questionnaire/questionnaire.component";

const routes: Routes = [
  { path: "", component: QuestionnaireComponent },
  { path: "questions", component: QuestionnaireComponent },
  { path: "q2", component: QuestionWithRadioButtonsComponent },
  { path: "q3", component: QuestionWithStarRatingComponent },
  { path: "overallrating/:rating", component: OverallCompanyRatingComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
