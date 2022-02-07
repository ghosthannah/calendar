import { Component, OnInit } from "@angular/core";
import { DateTime } from "luxon";
import { CalendarService } from "src/shared/services/calendar.service";
import { ContentService } from "src/shared/services/content.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "calendar";
  today: DateTime = DateTime.now();
  calendar: any = {};
  content: any = {};

  constructor(private readonly calendarService: CalendarService, private readonly contentService: ContentService) {}

  ngOnInit(): void {
    this.calendarService.getCalendar().subscribe((data: any) => {
      console.log(data);
      this.calendar = { ...data };
    });
    this.contentService.getContent().subscribe((data: any) => {
      console.log(data);
      this.content = { ...data };
    });
  }
}
