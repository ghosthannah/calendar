import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalendarService } from "./calendar/calendar.service";
import { CalendarController } from "./calendar/calendar.controller";

@Module({
  imports: [],
  controllers: [CalendarController, AppController],
  providers: [CalendarService, AppService],
})
export class AppModule {}
