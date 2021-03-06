import { Controller, Get } from "@nestjs/common";
import { AppService } from "./app.service";

@Controller("api")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get("/healthcheck")
  getHealthcheck(): string {
    return this.appService.healthcheck();
  }
}
