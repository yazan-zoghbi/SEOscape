import { Module } from '@nestjs/common';
import {FetchModule} from './domain/fetch/fetch.module'
 

@Module({
  imports: [FetchModule]
  
})
export class AppModule {}
