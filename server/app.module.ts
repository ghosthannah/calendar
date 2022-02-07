import { Module } from "@nestjs/common";
import { HttpModule } from "@nestjs/axios";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { CalendarService } from "./calendar/calendar.service";
import { CalendarController } from "./calendar/calendar.controller";
import { ContentController } from "./content/content.controller";
import { ContentService } from "./content/content.service";

@Module({
  imports: [HttpModule],
  controllers: [ContentController, CalendarController, AppController],
  providers: [ContentService, CalendarService, AppService]
})
export class AppModule {}
