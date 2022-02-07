import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class CalendarService {
  constructor(private http: HttpClient) {}

  getCalendar() {
    return this.http.get("/api/calendar");
  }
}
