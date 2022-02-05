import { Controller, Get } from "@nestjs/common";
import { CalendarService } from "./calendar.service";

@Controller("api/calendar")
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  getCalendar(): any {
    return this.calendarService.getCalendar();
  }
}
