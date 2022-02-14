import { Controller, Get, Post, Req, StreamableFile, Response } from "@nestjs/common";
import { CalendarService } from "./calendar.service";
import { createReadStream } from "fs";
import { join } from "path";

@Controller("api/calendar")
export class CalendarController {
  constructor(private readonly calendarService: CalendarService) {}

  @Get("cal")
  async getCalendar() {
    const response = await this.calendarService.getCalendar();
    return response.data;
  }

  @Get()
  getFile(@Response({ passthrough: true }) res: any): StreamableFile {
    const file = createReadStream(join(process.cwd(), "json/calendar.json"));
    res.set({
      "Content-Type": "application/json",
      "Content-Disposition": 'attachment; filename="calendar.json"'
    });
    return new StreamableFile(file);
  }

  @Post("cal")
  async setDateInCalendar(@Req() request: any) {
    const response = await this.calendarService.setDateInCalendar(request.body);
    return response.data;
  }
}
