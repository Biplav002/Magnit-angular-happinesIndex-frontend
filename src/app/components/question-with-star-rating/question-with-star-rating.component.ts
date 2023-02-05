import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { BackendCallService } from "src/app/services/backend-call.service";
import { DataStorageService } from "src/app/services/data-storage.service";

@Component({
  selector: "app-question-with-star-rating",
  templateUrl: "./question-with-star-rating.component.html",
  styleUrls: ["./question-with-star-rating.component.css"],
})
export class QuestionWithStarRatingComponent implements OnInit {
  public starRating: number;
  constructor(
    private dataStorage: DataStorageService,
    private backend: BackendCallService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public getStarRating(rate: number) {
    this.starRating = rate;
    this.dataStorage.setResponses(this.starRating);
  }

  public onSubmit() {
    const ratings: number[] = this.dataStorage.getRespnses();
    this.backend.getAvgRating(ratings).subscribe((data) => {
      this.router.navigate(["/overallrating", data]);
      console.log(data);
    });
  }
}
