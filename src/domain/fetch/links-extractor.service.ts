import { Injectable } from '@nestjs/common';
import * as cheerio from 'cheerio';
import { Spido, utils } from 'spido';

@Injectable()
export class LinksExtractorService {
  async getLinks(url: string) {
    const html = await utils.getHTML(url);
    const internalLinks = await utils.getInternalLinks(url, html);
    const externalLinks = await utils.getExternalLinks(url,html);
    const links = {
      'internal Links': internalLinks,
      'external Links': externalLinks
    }

    return links;
  }
}
