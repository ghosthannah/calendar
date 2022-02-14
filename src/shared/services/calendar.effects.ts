import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EMPTY } from "rxjs";
import { map, mergeMap, catchError } from "rxjs/operators";
import { CalendarService } from "./calendar.service";

@Injectable()
export class CalendarEffects {
  loadContent$ = createEffect(() =>
    this.actions$.pipe(
      ofType("[Calendar API] Load Calendar"),
      mergeMap(() =>
        this.calendarService.getCalendar().pipe(
          map((calendar) => {
            return { type: "[Calendar API] Calendar Loaded Success", calendar: calendar };
          }),
          catchError(() => EMPTY)
        )
      )
    )
  );

  constructor(private actions$: Actions, private calendarService: CalendarService) {}
}
