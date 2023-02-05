import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class DataStorageService {
  private savedResponses: number[] = [];

  constructor() {}

  public setResponses(response: number) {
    if (response) {
      this.savedResponses.push(response);
      sessionStorage.setItem("savedResp", JSON.stringify(this.savedResponses));
    }
  }

  public getRespnses() {
    this.savedResponses = JSON.parse(sessionStorage.getItem("savedResp"));
    console.log(this.savedResponses);
    return this.savedResponses;
  }
}
