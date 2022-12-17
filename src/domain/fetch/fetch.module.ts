import { Module } from '@nestjs/common';
import { FetchController } from './fetch.controller' ;
import { FetchService } from './fetch.service';
import { LinksExtractorService } from './links-extractor.service';

@Module({
  controllers: [FetchController],
  providers: [FetchService, LinksExtractorService],
})
export class FetchModule {}
