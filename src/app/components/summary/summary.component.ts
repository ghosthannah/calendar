import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { filter } from "rxjs/operators";

import { selectCalendar } from "@state/selectors";
import { DateTime } from "luxon";

@Component({
  selector: "app-summary",
  templateUrl: "./summary.component.html",
  styleUrls: ["./summary.component.scss"]
})
export class SummaryComponent implements OnInit {
  public month = "";
  public year = "";
  public monthlyEvents = [];
  public months: any[] = [];
  public selectedOption: any;

  public weeks: any[] = [];
  public daysOfWeek: any[] = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  calendar$: any;
  today$: any;

  @Output() newEvent = new EventEmitter<any>();

  private firstDayOfMonth: DateTime = DateTime.now();

  constructor(private store: Store) {
    this.calendar$ = {};
    this.today$ = DateTime.now();
    const m = this.today$.toFormat("MMMM");
    const y = this.today$.toFormat("yyyy");
    this.months = [
      { value: 0, label: `${m} ${y}`, month: m, year: y }
    ]
  }

  ngOnInit(): void {
    this.initializeState();
  }

  initializeState() {
    this.store
      .pipe(
        select(selectCalendar),
        filter((val) => val !== undefined)
      )
      .subscribe((sub) => {
        this.calendar$ = sub;
        this.months = [];
        Object.keys(this.calendar$).forEach((year, yrIndex) => {
          for (let i = 1; i <= 12; i++) {
            const m = DateTime.fromObject({ year: parseInt(year), month: i}).toFormat("MMMM");
            const y = year;
            this.months.push({
              value: i * (yrIndex + 1), label: `${m} ${y}`, month: m, year: y
            })
          }
        });

        this.firstDayOfMonth = this.today$.startOf("month");
        this.selectedOption = this.months.find((x) => x.label === this.firstDayOfMonth.toFormat("MMMM yyyy"));
        this.month = this.selectedOption.month;
        this.year = this.selectedOption.year;
        this.setCalendar();

        if (this.year !== "" && this.month != "" && this.calendar$[this.year] !== undefined) {
          this.monthlyEvents = this.calendar$[this.year][this.month];
        }
      });
  }

  selectChange() {
    this.month = this.selectedOption.month;
    this.year = this.selectedOption.year;
    this.firstDayOfMonth = DateTime.fromFormat(`${this.year}-${this.month}-01`, "y-MMMM-dd");
    this.monthlyEvents = this.calendar$[this.year][this.month];
    this.setCalendar();
  }

  getEventsForDay(date: DateTime) {
    // eslint-disable-next-line
    let events: any[] = [];
    if (this.monthlyEvents && this.monthlyEvents.length > 0) {
      this.monthlyEvents.forEach((event: any) => {
        if (event.date === date.toISODate()) {
          events.push(event);
        }
      });
    }
    return events;
  }

  setCalendar() {
    this.weeks = [];

    let currentDay = this.firstDayOfMonth.day - this.firstDayOfMonth.weekday;
    let dt = this.firstDayOfMonth.minus({ days: this.firstDayOfMonth.weekday });
    while (currentDay < this.firstDayOfMonth.daysInMonth) {
      const week: any = {};
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
      if (!(week.days[0].date === undefined && week.days[6].date === undefined)) {
        this.weeks.push(week);
      }
    }
  }

  getCurrentDay(currentDay: number) {
    return currentDay < 1 ? undefined : currentDay > this.firstDayOfMonth.daysInMonth ? undefined : currentDay;
  }

  createNewEvent($event: any) {
    console.log($event);
  }
}
