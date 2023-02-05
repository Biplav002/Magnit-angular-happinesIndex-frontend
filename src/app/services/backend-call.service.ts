import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class BackendCallService {
  constructor(private httpClient: HttpClient) {}

  getAvgRating(ratings: number[]): Observable<any> {
    const url = "http://localhost:8080/ratings";
    let httpParams = new HttpParams();
    let headers = new HttpHeaders();

    httpParams = httpParams.set("ratings", JSON.stringify(ratings));
    return this.httpClient.get<any>(url, {
      headers: headers,
      params: httpParams,
    });
  }
}
