import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatService {

  // apiKey: string = '341b3a8d-6eb2-4eaa-809f-b5fb4245d695';

  constructor(private httpClient: HttpClient) { }

  getCatPic(): any {
    return this.httpClient.get(`https://api.thecatapi.com/v1/images/search`,
      // {
      //   params: { api_key: this.apiKey }
      // }
    );
  }

  // getCatGif(): any {
  //   return this.httpClient.get(`https://api.thecatapi.com/images/search?mime_types=gif`);
  // }

}
