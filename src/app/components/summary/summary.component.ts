import { Component, OnInit } from "@angular/core";
import { DateTime } from "luxon";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  public weeks: any[] = [];
  public today: DateTime = DateTime.now();

  private firstDayOfMonth: DateTime = this.today.startOf("month");

  ngOnInit(): void {
    this.weeks = [];

    let currentDay = this.firstDayOfMonth.day - this.firstDayOfMonth.weekday;
    while (currentDay < this.firstDayOfMonth.daysInMonth) {
      const week: any = {};
      let dt = this.firstDayOfMonth;
      week.days = [];
      for (let i = 0; i < 7; i++) {
        week.days.push({
          position: i,
          date: this.getCurrentDay(currentDay),
          d: dt
        });
        currentDay += 1;
        dt = dt.plus({ days: 1 });
      }
      this.weeks.push(week);
    }
  }

  getCurrentDay(currentDay: number) {
    return currentDay < 1 ? undefined : currentDay > this.firstDayOfMonth.daysInMonth ? undefined : currentDay;
  }
}
