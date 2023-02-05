import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { DataStorageService } from "src/app/services/data-storage.service";

@Component({
  selector: "app-question-with-radio-buttons",
  templateUrl: "./question-with-radio-buttons.component.html",
  styleUrls: ["./question-with-radio-buttons.component.css"],
})
export class QuestionWithRadioButtonsComponent implements OnInit {
  public dropdownOptions: number[] = [1, 2, 3, 4, 5];
  public currentSelection: number;

  public radioForm = new FormGroup({
    radioControl: new FormControl(1),
  });
  constructor(
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {}

  onNextClick() {
    console.log(this.currentSelection);
    this.dataStorage.setResponses(this.currentSelection);
    this.router.navigate(["/q3"]);
  }
}
