import { Injectable } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class FetchService {
  async crawlLink(url: string) {
    const responseValid = await axios.get(url).then((response) => {
      if (response.status < 500) return true;
    });

    if ( responseValid) {
      console.log('crawling started ...');
    }
    else console.log('error')
  }
}
