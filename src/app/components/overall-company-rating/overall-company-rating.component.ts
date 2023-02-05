import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";

@Component({
  selector: "app-overall-company-rating",
  templateUrl: "./overall-company-rating.component.html",
  styleUrls: ["./overall-company-rating.component.css"],
})
export class OverallCompanyRatingComponent implements OnInit {
  overallRating: string;
  borderColor: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.overallRating = this.route.snapshot.paramMap.get("rating");

    if (this.overallRating === "4" || this.overallRating === "5") {
      this.borderColor = "green";
    } else if (this.overallRating === "2" || this.overallRating === "3") {
      this.borderColor = "yellow";
    } else {
      this.borderColor = "red";
    }
  }
}
