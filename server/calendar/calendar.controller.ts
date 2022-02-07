import { Controller, Get, Post, Req } from "@nestjs/common";
import { CalendarService } from "./calendar.service";

@Controller("api/calendar")
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get()
  async getCalendar() {
    const response = await this.calendarService.getCalendar();
    return response.data;
  }

  @Post()
  async setDateInCalendar(@Req() request: any) {
    const response = await this.calendarService.setDateInCalendar(request.body);
    return response.data;
  }
}
