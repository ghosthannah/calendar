import { Component, OnInit, Input } from "@angular/core";
import { DateTime } from "luxon";

@Component({
  selector: "app-summary-day",
  templateUrl: "./summary-day.component.html",
  styleUrls: ["./summary-day.component.scss"]
})
export class SummaryDayComponent implements OnInit {
  @Input() day: any;
  public today: DateTime = DateTime.now();
  public isToday = false;
  public isWeekday = false;
  public isWeekend = false;
  public date = 0;

  constructor() {}

  ngOnInit(): void {
    this.date = this.day.date;
    this.isToday = this.date === this.today.day;

    const dt = this.day.d;

    this.isWeekday = dt.day > 1 && dt.day < 7;
    this.isWeekend = !this.isWeekday;
  }
}
