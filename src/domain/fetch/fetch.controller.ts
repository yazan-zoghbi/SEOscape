import { Body, Controller, Get, Post } from '@nestjs/common';
import { FetchService } from './fetch.service';
import { FetchLinkDto } from './dto/fetch-link.dto';

@Controller('fetch')
export class FetchController {
  constructor(private readonly fetchService: FetchService) {}

  @Post()
  async fetch(@Body() fetchLinkDto:FetchLinkDto) {
    console.log(fetchLinkDto.url);
    return await this.fetchService.crawlLink(fetchLinkDto.url);
  }
}
