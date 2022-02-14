import { Component, OnInit } from "@angular/core";
import { Store, select } from "@ngrx/store";
import { filter } from "rxjs/operators";

import { selectContent } from "@state/selectors";

@Component({
  selector: "app-statistics",
  templateUrl: "./statistics.component.html",
  styleUrls: ["./statistics.component.scss"]
})
export class StatisticsComponent implements OnInit {
  content$: any;

  constructor(private store: Store) {
    this.content$ = {};
  }

  ngOnInit(): void {
    this.store
      .pipe(
        select(selectContent),
        filter((val) => val !== undefined)
      )
      .subscribe((sub) => {
        this.content$ = sub;
      });
  }
}
