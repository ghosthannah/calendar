import { Injectable } from "@nestjs/common";
import { HttpService } from "@nestjs/axios";
import { lastValueFrom } from "rxjs";
import { environment } from "../../json/environment";

@Injectable()
export class ContentService {
  constructor(private http: HttpService) {}

  async getContent(): Promise<any> {
    const url = environment.baseUrl + environment.endpoints.getContent;
    const data$ = await this.http.get(url);
    return lastValueFrom(data$);
  }
}
