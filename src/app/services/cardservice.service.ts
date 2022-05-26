import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CardserviceService {
  private url = 'https://card-demo.azurewebsites.net/card/';

  constructor(private httpClient: HttpClient) { }
  
  getCardList(){
    console.log('get call initialed');
    return this.httpClient.get(this.url);
  }
  performSort(data:any){
    console.log('post call initialed');
    console.log(data);
    return this.httpClient.post(this.url,data);
  }
}
