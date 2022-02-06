import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./components/home/home.component";
import { MonthComponent } from "./components/month/month.component";
import { SummaryComponent } from "./components/summary/summary.component";
import { StatisticsComponent } from "./components/statistics/statistics.component";
import { SummaryDayComponent } from "./components/summary/summary-day/summary-day.component";
import { DayComponent } from "./components/month/day/day.component";

@NgModule({
  declarations: [AppComponent, HomeComponent, MonthComponent, SummaryComponent, StatisticsComponent, SummaryDayComponent, DayComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
