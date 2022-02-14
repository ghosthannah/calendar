import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { filter } from "rxjs/operators";

import { selectCalendar, selectToday } from "@state/selectors";
import { Calendar } from "@models/calendar";
import { DateTime } from "luxon";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  public month = "";
  public year = "";
  public weeks: any[] = [];
  public daysOfWeek: any[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  calendar$: Calendar;
  today$: any;
  state$: any;

  private firstDayOfMonth: DateTime = DateTime.now();

  constructor(private store: Store) {
    this.calendar$ = {
      "2022": {},
      "2023": {}
    };
    this.today$ = "";
    this.state$ = {};
  }

  ngOnInit(): void {
    this.initializeState();
    this.month = this.firstDayOfMonth.toFormat("MMMM");
    this.year = this.firstDayOfMonth.toFormat("yyyy");
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

  initializeState() {
    this.store
      .pipe(
        select(selectToday),
        filter((val) => val !== undefined)
      )
      .subscribe((sub) => {
        this.today$ = sub;
        this.firstDayOfMonth = this.today$.startOf("month");
      });

    this.store
      .pipe(
        select(selectCalendar),
        filter((val) => val !== undefined)
      )
      .subscribe((sub) => {
        this.calendar$ = sub;
      });
  }

  getCurrentDay(currentDay: number) {
    return currentDay < 1 ? undefined : currentDay > this.firstDayOfMonth.daysInMonth ? undefined : currentDay;
  }
}
