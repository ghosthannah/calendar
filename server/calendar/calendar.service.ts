import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";
import { environment } from "../../json/environment";

@Injectable()
export class CalendarService {
  constructor(private http: HttpService) {}

  async getCalendar(): Promise<any> {
    const url = environment.baseUrl + environment.endpoints.getCal;
    const data$ = await this.http.get(url);
    return lastValueFrom(data$);
  }

  async setDateInCalendar(body: any): Promise<any> {
    const url = environment.baseUrl + environment.endpoints.setDateInCal;
    const data$ = await this.http.post(url, body);
    return lastValueFrom(data$);
  }
}
