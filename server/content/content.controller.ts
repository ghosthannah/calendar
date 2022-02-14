import { Controller, Get, StreamableFile, Response } from "@nestjs/common";
import { ContentService } from "./content.service";
import { createReadStream } from "fs";
import { join } from "path";

@Controller("api/content")
export class ContentController {
  constructor(private readonly contentService: ContentService) {}

  @Get("caas")
  async getContent() {
    const response = await this.contentService.getContent();
    return response.data;
  }

  @Get()
  getFile(@Response({ passthrough: true }) res: any): StreamableFile {
    const file = createReadStream(join(process.cwd(), "json/content.json"));
    res.set({
      "Content-Type": "application/json",
      "Content-Disposition": 'attachment; filename="content.json"'
    });
    return new StreamableFile(file);
  }
}
