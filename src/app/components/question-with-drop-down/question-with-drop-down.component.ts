import { Component, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { Router } from "@angular/router";
import { DataStorageService } from "src/app/services/data-storage.service";

@Component({
  selector: "app-question-with-drop-down",
  templateUrl: "./question-with-drop-down.component.html",
  styleUrls: ["./question-with-drop-down.component.css"],
})
export class QuestionWithDropDownComponent implements OnInit {
  public dropDownForm = new FormGroup({
    dropdownControl: new FormControl(1),
  });
  public dropdownOptions: number[] = [1, 2, 3, 4, 5];
  public currentSelection: number;
  constructor(
    private dialog: MatDialog,
    private router: Router,
    private dataStorage: DataStorageService
  ) {}

  ngOnInit(): void {}

  onNextClick() {
    this.dataStorage.setResponses(this.currentSelection);
    this.router.navigate(["/q2"]);
  }
}
