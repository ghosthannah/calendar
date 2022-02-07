import { Controller, Get } from "@nestjs/common";
import { ContentService } from "./content.service";

@Controller("api/content")
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get()
  async getContent() {
    const response = await this.contentService.getContent();
    return response.data;
  }
}
