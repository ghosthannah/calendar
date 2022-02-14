import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { SharedModule } from "src/shared/shared.module";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { MonthComponent } from "./components/month/month.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { SummaryDayComponent } from "./components/summary/summary-day/summary-day.component";
import { DayComponent } from "./components/month/day/day.component";
import { StoreModule } from "@ngrx/store";
import { calendarReducer, contentReducer, todayReducer } from "./state/reducers";
import { EffectsModule } from "@ngrx/effects";
import { ContentEffects } from "src/shared/services/content.effects";
import { CalendarEffects } from "@shared/services/calendar.effects";

@NgModule({
  declarations: [AppComponent, HomeComponent, MonthComponent, SummaryComponent, StatisticsComponent, SummaryDayComponent, DayComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    StoreModule.forRoot({ content: contentReducer, calendar: calendarReducer, today: todayReducer }),
    EffectsModule.forRoot([ContentEffects, CalendarEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
