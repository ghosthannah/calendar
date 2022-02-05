import { Injectable } from '@nestjs/common';

@Injectable()
export class CalendarService {
  getCalendar() {
      return {
        currentDate: new Date()
      };
  }
}
