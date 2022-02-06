import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";

@Injectable()
export class CalendarService {
  constructor(private http: HttpService) {}

  getCalendar() {
    return {
      currentDate: new Date()
    };
  }

  setTimeOff() {
    return {};
  }

  setHolidays() {
    return {};
  }
}
