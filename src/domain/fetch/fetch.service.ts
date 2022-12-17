import { Injectable, Inject } from '@nestjs/common';
import axios from 'axios';
import { LinksExtractorService } from './links-extractor.service';
import { utils } from 'spido';

@Injectable()
export class FetchService {
  constructor(private readonly linksExtractorService: LinksExtractorService) {}
  async crawlLink(url: string) {
    const isValid = await utils.isValidUrl(url);

    if (isValid) {
      console.log('fetching url: ' + url);
      console.log('crawling started ...');
    } else console.log('error');

    return await this.linksExtractorService.getLinks(url);
  }
}
