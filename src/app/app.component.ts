import { Component, OnInit } from "@angular/core";
import { DateTime } from "luxon";
import { Store } from "@ngrx/store";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  title = "calendar";
  today: DateTime = DateTime.now();

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch({ type: "[Calendar API] Load Calendar" });
    this.store.dispatch({ type: "[Content API] Load Labels" });
    this.store.dispatch({ type: "[Today] Today Loaded Success", today: this.today });
  }
}
