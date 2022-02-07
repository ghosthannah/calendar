import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { HttpClientModule } from "@angular/common/http";

import { CalendarService } from "./services/calendar.service";
import { ContentService } from "./services/content.service";

@NgModule({
  imports: [BrowserModule, HttpClientModule],
  providers: [CalendarService, ContentService]
})
export class SharedModule {}
