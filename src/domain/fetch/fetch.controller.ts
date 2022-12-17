import { Body, Controller, Get, Param, Post, Query } from '@nestjs/common';
import { FetchService } from './fetch.service';
import { FetchLinkDto } from './dto/fetch-link.dto';

@Controller('fetch')
export class FetchController {
  constructor(private readonly fetchService: FetchService) {}

  @Get('links')
  async fetchLinks(
    @Query('type') type: string,
    @Body() fetchLinkDto: FetchLinkDto,
  ) {
    console.log(type);
    if (type === 'internal') {
      return (await this.fetchService.crawlLink(fetchLinkDto.url))
        ['internal Links'];
    } else if (type === 'external') {
      return (await this.fetchService.crawlLink(fetchLinkDto.url))
        ['external Links'];
    } else if (type.includes('internal') && type.includes('external')) {
      return await this.fetchService.crawlLink(fetchLinkDto.url);
    }
  }
}
