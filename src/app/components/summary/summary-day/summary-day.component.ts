import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { DateTime } from "luxon";

@Component({
  selector: "app-summary-day",
  templateUrl: "./summary-day.component.html",
  styleUrls: ["./summary-day.component.scss"]
})
export class SummaryDayComponent implements OnInit {
  @Input() day: any;
  @Input() events: any;
  @Output() onNewEvent = new EventEmitter<any>();
  public today: DateTime = DateTime.now();
  public isToday = false;
  public isWeekday = false;
  public isWeekend = false;
  public date = 0;

  constructor() {}

  ngOnInit(): void {
    this.date = this.day.date;
    this.isToday = this.day.d ? this.today.toFormat("yyyy-MM-dd") === this.day.d.toFormat("yyyy-MM-dd") : false;

    this.isWeekday = this.day.position > 0 && this.day.position < 6;
    this.isWeekend = !this.isWeekday;
  }

  getIconForType(event: any) {
    if (event.icon) {
      return event.icon;
    } else if (event.type === "birthday") {
      return "cake";
    } else if (event.type === "office") {
      return "maps_home_work";
    }
    return "event";
  }

  addNew() {
    const value = { test: "event" };
    this.onNewEvent.emit(value);
  }
}
